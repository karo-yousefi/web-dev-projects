const button = document.getElementById("button");
const text = document.getElementById("text");

let isThemeLight = true;


function toggleTheme(){
    if(isThemeLight){
        document.documentElement.setAttribute("data-theme", "dark");
        text.innerHTML = "Dark Mode";
        isThemeLight = false;
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
        text.innerHTML = "Light Mode";
        isThemeLight = true;
    }
}


button.addEventListener("click", toggleTheme);