window.addEventListener('load', init);

let apiUrl = "./getInfo.php";
let disabledData = {};
let gallery;
let detailDialog;
let detailContent;

function init(){
    gallery = document.getElementById('info-gallery');
    gallery.addEventListener('click', infoClickHandler);

    detailDialog = document.getElementById('disability-detail');
    detailContent = detailDialog.querySelector('.modal-content');
    detailDialog.addEventListener('click', detailModalClickHandler);
    detailDialog.addEventListener('close', dialogCloseHandler);

    ajaxRequest(apiUrl, ajaxSuccesHandler)
}

function ajaxRequest(url, successHandler)
{
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
            console.log(response.statusText);
        })
        .then(successHandler)
        .catch(ajaxErrorHandler);
}

function ajaxSuccesHandler(data){
    for (let disability of data) {
        let disabilityCard = document.createElement('div');
        disabilityCard.classList.add('disability-card');
        disabilityCard.dataset.name = disability.name;
        gallery.appendChild(disabilityCard);
        ajaxRequest(disability.url, fillDisabilityCard);
    }
}

function fillDisabilityCard(disability)
{
    //Wrapper element for every Pokémon card
    let disabilityCard = document.querySelector(`.disability-card[data-name='${disability.name}']`);

    //Element for the name of the Pokémon
    let title = document.createElement('h2');
    title.innerHTML = `${disability.name} (#${disability.id})`;
    disabilityCard.appendChild(title);

    //Element for the image of the Pokémon
    let image = document.createElement('img');
    image.src = disability.img;
    disabilityCard.appendChild(image);

    //Element for the button to load the shiny version of the Pokémon
    let button = document.createElement('button');
    button.innerHTML = 'Show Info';
    button.dataset.id = disability.id;
    disabilityCard.appendChild(button);

    //Store Pokémon data globally for later use in other functions
    disabledData[disability.id] = disability;
}

function ajaxErrorHandler(data){
    console.log(data);
    let error = document.createElement('div');
    error.classList.add('error');
    error.innerHTML = 'Er is helaas iets fout gegaan met de API, probeer het later opnieuw';
    gallery.before(error);
}

function infoClickHandler(e)
{
    let clickedItem = e.target;

    //Check if we clicked on a button
    if (clickedItem.nodeName !== 'BUTTON') {
        return;
    }

    //Get the information from the global stored data
    let disability = disabledData[clickedItem.dataset.id];

    //Reset the content
    detailContent.innerHTML = '';

    //Show the name we used on the main grid
    let title = document.createElement('h1');
    title.innerHTML = `${disability.name} (#${disability.id})`;
    detailContent.appendChild(title);

    //Display the shiny
    let img = document.createElement('img');
    img.src = disability.img;
    detailContent.appendChild(img);

    //Open the modal
    detailDialog.showModal();
    gallery.classList.add('dialog-open');
}

function detailModalClickHandler(e)
{
    if (e.target.nodeName === 'DIALOG' || e.target.nodeName === 'BUTTON') {
        detailDialog.close();
    }
}

function dialogCloseHandler(e)
{
    gallery.classList.remove('dialog-open');
}