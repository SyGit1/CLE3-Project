// fetch('includes/action.php')
//     .then(response => response.json())
//     .then(data => {
//         createDiv(data.locations);
//     })
//     .catch(error => {
//         console.error(error);
//     });
//
// function createDiv(locations) {
//     for (let location of locations) {
//         const div = document.createElement('div');
//         const addFavourite = document.createElement('img');
//         const details = document.createElement('button');
//
//         div.innerHTML = `<h2>${location.name}</h2><p>${location.location}</p>`;
//         div.classList.add('locationData')
//
//         addFavourite.src = 'resources/Black_Star.png'
//         addFavourite.classList.add('favouriteNotClicked')
//         addFavourite.setAttribute('data-id', location.id);
//
//         const currentClass = localStorage.getItem(`favouriteClass-${location.id}`);
//         if (currentClass) {
//             addFavourite.classList.add(currentClass);
//             if (currentClass === 'favouriteClicked') {
//                 addFavourite.src = 'resources/card1.jpeg';
//             }
//         }
//
//         details.innerHTML = 'Details';
//         details.classList.add('detailView')
//
//         div.appendChild(details);
//         div.appendChild(addFavourite);
//         document.body.appendChild(div);
//
//         addFavourite.addEventListener('click', () => {
//             let currentClass = addFavourite.classList.contains('favouriteClicked') ? 'favouriteNotClicked' : 'favouriteClicked';
//             addFavourite.classList.remove('favouriteNotClicked', 'favouriteClicked');
//             addFavourite.classList.add(currentClass);
//             addFavourite.src = currentClass === 'favouriteClicked' ? 'resources/card1.jpeg' : 'resources/Black_Star.png';
//             localStorage.setItem(`favouriteClass-${location.id}`, currentClass);
//         });
//     }
// }

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