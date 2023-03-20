window.addEventListener('load', init);

let dark;

function init(){
    dark = document.getElementsByClassName('darkMode');
    console.log(dark)
    dark.addEventListener('click', darkModeClickHandler());
}

function darkModeClickHandler(){
    dark.classList.toggle("darkMode");
    console.log(`success~!`)
};