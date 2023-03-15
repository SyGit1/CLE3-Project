window.addEventListener('load', init);

let darkMode;

function init(){
    darkMode = document.getElementById('light')
    darkMode.addEventListener('click',darkModeClickHandler)
}

function darkModeClickHandler(){
    darkMode.classList.toggle("darkMode");
};