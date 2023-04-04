window.addEventListener('DOMContentLoaded', () => {
    let favourite = document.createElement('button');
    favourite.innerHTML = 'favoriet';
    favourite.classList.add('notClicked')

    let div = document.getElementById('favo');
    div.appendChild(favourite);
});