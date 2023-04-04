let favourite = document.createElement('img');
let currentClass = localStorage.getItem('favouriteClass');

window.addEventListener('DOMContentLoaded', () => {
    favourite.src = 'img/Black_Star.png';
    favourite.classList.add('notClicked');

    if (currentClass) {
        favourite.classList.add(currentClass);
        if (currentClass === 'clicked') {
            favourite.src = 'img/card1.jpeg';
        }
    }

    let div = document.getElementById('favo');
    div.appendChild(favourite);
});

favourite.addEventListener('click', () => {

    if (currentClass === 'notClicked') {
        favourite.classList.remove('notClicked');
        favourite.classList.add('clicked');
        currentClass = 'clicked';
        favourite.src = 'img/card1.jpeg';

    } else {
        favourite.classList.remove('clicked');
        favourite.classList.add('notClicked');
        currentClass = 'notClicked';
        favourite.src = 'img/Black_Star.png';
    }

    localStorage.setItem('favouriteClass', currentClass);
});

// // Create an array to store each instance
// const favourites = [];
//
// // Loop through each favourite instance
// for (let i = 1; i <= 2; i++) {
//     // Create a new favourite element
//     const favourite = document.createElement('img');
//     favourite.id = 'favo' + i;
//
//     // Get the current class from localStorage, or set it to notClicked by default
//     let currentClass = localStorage.getItem(favourite.id) || 'notClicked';
//
//     // Set the initial image source and class
//     favourite.src = currentClass === 'notClicked' ? 'img/Black_Star.png' : 'img/card1.jpeg';
//     favourite.classList.add(currentClass);
//
//     // Append the favourite element to the page
//     let div = document.getElementById('favo' + i);
//     div.appendChild(favourite);
//
//     // Add a click event listener to toggle the class and image source
//     favourite.addEventListener('click', () => {
//         if (currentClass === 'notClicked') {
//             favourite.classList.remove('notClicked');
//             favourite.classList.add('clicked');
//             currentClass = 'clicked';
//             favourite.src = 'img/card1.jpeg';
//         } else {
//             favourite.classList.remove('clicked');
//             favourite.classList.add('notClicked');
//             currentClass = 'notClicked';
//             favourite.src = 'img/Black_Star.png';
//         }
//
//         // Store the updated class in localStorage
//         localStorage.setItem(favourite.id, currentClass);
//     });
//
//     // Push the current instance to the favourites array
//     favourites.push(favourite);
// }
