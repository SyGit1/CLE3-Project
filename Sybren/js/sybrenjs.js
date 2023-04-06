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
        div.classList.add('locationData')
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
                addFavourite.src = 'resources/card1.jpeg';
                addFavourite.classList.remove('favouriteNotClicked');
                addFavourite.classList.add('favouriteClicked');
                addToLocalStorage(location.id);
            }
        });

        let currentClass = getFromLocalStorage(location.id);
        if (currentClass) {
            addFavourite.src = currentClass === 'favouriteClicked' ? 'resources/card1.jpeg' : 'resources/Black_Star.png';
            addFavourite.classList.add(currentClass);
        }


        // Show location details in dialog
        details.addEventListener('click', () => {
            const id = details.getAttribute('data-id');
            const url = `includes/action.php?id=${id}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const dialog = document.querySelector('#pokemon-detail');
                    const modalContent = dialog.querySelector('.modal-content');

                    // Create a table with the retrieved data
                    let tableHtml = '<table>';
                    for (const key in data.details) {
                        tableHtml += `<tr><td>${key}</td><td>${data.details[key]}</td></tr>`;
                    }
                    tableHtml += '</table>';

                    // Set the table as the modal content
                    modalContent.innerHTML = tableHtml;
                    dialog.showModal();
                })
                .catch(error => {
                    console.error(error);
                });
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
