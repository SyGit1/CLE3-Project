function darkmode() {
    let SetTheme = document.body;

    SetTheme.classList.toggle("dark-mode");

    let theme;

    if(SetTheme.classList.contains("dark-mode")) {
        console.log("Dark Mode");
        theme = "DARK";
    } else {
        console.log("Light mode");
        theme = "LIGHT";
    }

    // save to localStorage

    localStorage.setItem("PageTheme", JSON.stringify(theme));
    // ensure you convert to JSON like have done ---- JSON.stringify(theme)
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if (GetTheme === "DARK") {
    document.body.classList = "dark-mode";
}