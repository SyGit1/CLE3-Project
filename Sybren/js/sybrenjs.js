fetch('includes/action.php')
    .then(response => response.json())
    .then(data => {
        createDiv(data.locations);
    })
    .catch(error => {
        console.error(error);
    });

function createDiv(locations) {
    for (let location of locations) {
        const div = document.createElement('div');
        const addFavourite = document.createElement('img');
        const details = document.createElement('button');
        div.innerHTML = `<h2>${location.name}</h2><p>${location.location}</p>`;
        div.classList.add('locationData', 'loadDiv')
        addFavourite.src = 'resources/Black_Star.png'
        addFavourite.classList.add('favouriteNotClicked')
        addFavourite.setAttribute('data-id', location.id);
        details.innerHTML = 'Details';
        details.classList.add('detailView')
        details.setAttribute('data-id', location.id)
        div.appendChild(details);
        div.appendChild(addFavourite);
        document.body.appendChild(div);

        addFavourite.addEventListener('click', () => {
            let clicked = addFavourite.classList.contains('favouriteClicked');
            if (clicked) {
                addFavourite.src = 'resources/Black_Star.png';
                addFavourite.classList.remove('favouriteClicked');
                addFavourite.classList.add('favouriteNotClicked');
                removeFromLocalStorage(location.id);
            } else {
                addFavourite.src = 'resources/Gold_Star.png';
                addFavourite.classList.remove('favouriteNotClicked');
                addFavourite.classList.add('favouriteClicked');
                addToLocalStorage(location.id);
            }
        });

        let currentClass = getFromLocalStorage(location.id);
        if (currentClass) {
            // Ternaire operator, als de opgeslagen waarde in de localstorage 'favouriteClicked' is wordt de img src 'resources/Gold_Star.png', is dit niet
            // het geval wordt de img src 'resources/Black_Star.png'
            addFavourite.src = currentClass === 'favouriteClicked' ? 'resources/Gold_Star.png' : 'resources/Black_Star.png';
            addFavourite.classList.add(currentClass);
        }


        // eventListener voor de details button, nadat deze geklikt is worden de JSON objecten uit action.php opgehaald waar het id overeenkomt met de data-id
        // van de button. Hierna wordt de DOM benut om een tabel aan te maken waarin de opgehaalde informatie wordt getoond
        details.addEventListener('click', () => {
            const id = details.getAttribute('data-id');
            const url = `includes/action.php?id=${id}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const dialog = document.getElementById('detailView');
                    const modalContent = dialog.querySelector('.modal-content');

                    // Create a table with the retrieved data
                    const table = document.createElement('table');
                    for (const key in data.details) {
                        const row = table.insertRow();
                        const cell1 = row.insertCell();
                        const cell2 = row.insertCell();
                        cell1.textContent = key;
                        cell2.textContent = data.details[key];
                    }

                    // Tabel toevoegen aan de modalContent
                    modalContent.innerHTML = '';
                    modalContent.appendChild(table);
                    dialog.showModal();
                })
                .catch(error => {
                    console.error(error);
                });
        });

        // querySelector, want getElementsByClassName werkte niet, dit heb ik op meerdere plekken
        const closeButton = document.querySelector('.modal-close');
        const dialog = document.getElementById('detailView');

        closeButton.addEventListener('click', () => {
            dialog.close();
        });


    }
}


function getFromLocalStorage(id) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || {};
    return favourites[id];
}

function addToLocalStorage(id) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || {};
    favourites[id] = 'favouriteClicked';
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

function removeFromLocalStorage(id) {
    let favourites = JSON.parse(localStorage.getItem('favourites')) || {};
    delete favourites[id];
    localStorage.setItem('favourites', JSON.stringify(favourites));
}