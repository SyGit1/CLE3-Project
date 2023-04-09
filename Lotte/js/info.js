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

    //Add event listeners for form & removal
    favoriteForm.addEventListener('submit', formSubmitHandler);
    list.addEventListener('click', todoItemClickHandler);

    //Retrieve current items from local storage & add them to the list
    let favoriteItemsString = localStorage.getItem('favoriteItems');
    if (favoriteItemsString !== null && favoriteItemsString !== undefined) { //Or: if (todoItemsString !== null) {
        favoriteItems = JSON.parse(favoriteItemsString);
        for (let favoriteItem of favoriteItems) {
            addTodoItem(favoriteItem);
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
 * Create initial Pokémon cards based on initial API data
 *
 * @param data
 */
function createInfoCards(data) {
    //Loop through the list of Pokémon
    for (let getDishes of data) {
        //Wrapper element for every Pokémon card. We need the wrapper now, because adding it later
        //will result in Pokémon being ordered based on the load times of the API instead of chronically
        let infoCard = document.createElement('div');
        infoCard.classList.add('create-info-card');
        infoCard.dataset.name = getDishes.name;

        //Append Pokémon card to the actual HTML
        gallery.appendChild(infoCard);

        //Retrieve the detail information from the API
        //ajaxRequest(getDishes.url, fillInfoCard);
        fillInfoCard(getDishes);
    }
}

/**
 * Create the actual contents of the card based on the loaded API information
 *
 * @param getDishes
 */
function fillInfoCard(getDishes) {
    //Wrapper element for every Pokémon card
    let infoCard = document.querySelector(`.create-info-card[data-name='${getDishes.name}']`);

    //Element for the name of the Pokémon
    let title = document.createElement('h2');
    title.innerHTML = `${getDishes.name}`;
    infoCard.appendChild(title);

    //Element for the image of the Pokémon
    let image = document.createElement('img');
    image.src = getDishes.img;
    infoCard.appendChild(image);

    //Element for the button to load the shiny version of the Pokémon
    let button = document.createElement('button');
    button.innerHTML = 'Show disability';
    button.dataset.id = getDishes.id;
    infoCard.appendChild(button);

    //Store Pokémon data globally for later use in other functions
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
 * Open the detailview with information of our sport
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

    let img = document.createElement('img');
    img.innerHTML = `${data.img}`;
    detailContent.appendChild(img);

    let tekst = document.createElement('p');
    tekst.innerHTML = `${data.recipe}`;
    detailContent.appendChild(tekst);

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
 * Handle the new input from the form
 *
 * @param e
 */
function formSubmitHandler(e) {
    e.preventDefault();
    console.log("add to favorite");
    //Check if the field is not empty
    let name = dataForModal.name;
    console.log(dataForModal.name)

    //Add to the HTML list & local storage
    addTodoItem(name);
    todoItems.push(name);
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
}

/**
 * Add a new item to the HTML
 *
 * @param todoText
 */
function addTodoItem(todoText) {
    let listItem = document.createElement('li');
    listItem.innerText = todoText;
    list.appendChild(listItem);
    console.log(favoriteItems);
}

/**
 * Remove the clicked list item
 *
 * @param e
 */
function todoItemClickHandler(e) {
    let favoriteTarget = e.target;

    //Only continue if we clicked on a list item
    if (favoriteTarget.nodeName !== 'LI') {
        return;
    }

    //Remove from local storage
    let itemIndex = favoriteItems.indexOf(favoriteTarget.innerText);
    todoItems.splice(itemIndex, 1);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    //Remove from HTML
    favoriteTarget.remove();
}