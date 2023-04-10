window.addEventListener('load', init);

//Globals
let apiUrl = "./getInfo.php";
let infoData = {};
let gallery;
let detailDialog;
let detailContent;
let favoriteItems = [];
let list;
let favoriteForm;
let dataForModal;

function init() {

    gallery = document.getElementById('info-gallery');
    gallery.addEventListener('click', infoClickHandler);

    //Connect variables with HTML elements
    favoriteForm = document.querySelector('#favoriteForm');
    list = document.querySelector('#list');

    //Retrieve current items from local storage & add them to the list
    let favoriteItemsString = localStorage.getItem('favorites');
    if (favoriteItemsString !== null && favoriteItemsString !== undefined) { //Or: if (todoItemsString !== null) {
        favoriteItems = JSON.parse(favoriteItemsString);
        for (let favoriteItem in favoriteItems) {
            addTodoItem(favoriteItem, `todo${favoriteItem}`);
        }
    }
    //dialog element
    detailDialog = document.getElementById('disability-detail');
    detailContent = document.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', detailModalCloseHandler);

    //document.addEventListener('keyup', keyUpHandler);
    //Start the application with loading the API data
    ajaxRequest(apiUrl, createInfoCards);
}

/**
 * AJAX-call to retrieve data from a webservice
 *
 * @param url
 * @param successHandler
 */
function ajaxRequest(url, successHandler) {
    fetch(url)
        .then((response) => {
            console.log(response.statusText);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

/**
 * Create initial info cards based on initial API data
 *
 * @param data
 */
function createInfoCards(data) {
    for (let getDishes of data) {
        let infoCard = document.createElement('div');
        infoCard.classList.add('create-info-card');
        infoCard.dataset.name = getDishes.name;
        gallery.appendChild(infoCard);

        //Retrieve the detail information from the API
        fillInfoCard(getDishes);
    }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param getDishes
 */
function fillInfoCard(getDishes) {
    let infoCard = document.querySelector(`.create-info-card[data-name='${getDishes.name}']`);

    //Element for the name
    let title = document.createElement('h2');
    title.innerHTML = `${getDishes.name}`;
    infoCard.appendChild(title);

    //Element for the image
    let image = document.createElement('img');
    image.src = getDishes.img;
    image.classList.add('disabledimg')
    infoCard.appendChild(image);

    //Element for the button to show more info
    let button = document.createElement('button');
    button.innerHTML = 'Show information';
    button.dataset.id = getDishes.id;
    infoCard.appendChild(button);

    //Store data globally for later use in other functions
    infoData[getDishes.id] = getDishes;
}

/**
 * Show an error message to inform the API isn't working correctly
 *
 * @param data
 */
function ajaxErrorHandler(data) {
    console.log(data);
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    gallery.before(error);
}

/**
 * Open the detailview with info
 *
 * @param e
 */
function infoClickHandler(e) {
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }
    ajaxRequest(apiUrl + "?id=" + clickedItem.dataset.id, fillDetailCard);
}

function fillDetailCard(data) {
    console.log(data);
    dataForModal = data;
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${data.name}`;
    detailContent.appendChild(title);

    let image = document.createElement('img');
    image.src = `${data.img}`;
    image.classList.add('imgdetail')
    detailContent.appendChild(image);

    let info = document.createElement('p');
    info.innerHTML = `${data.info}`;
    detailContent.appendChild(info);

    let link = document.createElement('a');
    link.href = data.link;
    link.textContent = data.link;
    detailContent.appendChild(link);

    let button = document.createElement('button');
    detailContent.appendChild(button);
    console.log(data.id)

    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    if (favorites[data.name] === 'favoriteClicked') {
        button.classList.add('favoriteClicked');
        button.innerHTML = 'Remove from favorites list';
    }
    else{
        button.classList.add('favoriteNotClicked');
        button.innerHTML = 'Add to favorites list';
    }

    button.addEventListener('click', () => {
        let clicked = button.classList.contains('favoriteClicked');
        if (clicked) {
            button.classList.remove('favoriteClicked');
            button.classList.add('favoriteNotClicked');
            removeFromLocalStorage(data.name);
            removeTodoItem(`todo${data.name}`);
        } else {
            button.classList.remove('favoriteNotClicked');
            button.classList.add('favoriteClicked');
            addToLocalStorage(data.name);
            addTodoItem(data.name, `todo${data.name}`);
        }
    });

    //Open the modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}

/**
 * Close the modal if clicked on the close button or outside the modal (on the backdrop)
 *
 * @param e
 */
function detailModalClickHandler(e) {
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

/**
 * Also close the modal on escape key
 *
 * @param e
 */
function detailModalCloseHandler(e) {
    gallery.classList.remove('dialog-open');
}

/**
 * Add a new item to the HTML
 *
 * @param todoText
 */
function addTodoItem(todoText, id) {
    let listItem = document.createElement('li');
    listItem.innerText = todoText;
    listItem.id = id;
    list.appendChild(listItem);
}

function removeTodoItem(id) {
    let listItem = document.getElementById(id);
    listItem.remove()
}

function addToLocalStorage(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[id] = 'favoriteClicked';
    console.log(favorites)
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function removeFromLocalStorage(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    delete favorites[id];
    console.log(favorites)
    localStorage.setItem('favorites', JSON.stringify(favorites));
}