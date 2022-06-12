const toggleBtn= document.getElementById("toggle_mode"); 
const theme = document.getElementById("theme"); 
let darkMode = localStorage.getItem("dark-mode"),
    header__menu= document.querySelector(".header__menu"),
    tagA = document.querySelectorAll("a"); 

const enableDarkMode = () =>  {
    theme.classList.add('dark-mode-theme'); 
    header__menu.style.backgroundColor= "#000";
    tagA.forEach(item => {
        item.style.color = "#fff";
    });
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () =>  {
    theme.classList.remove("dark-mode-theme"); 
    header__menu.style.backgroundColor= "#fff";
    tagA.forEach(item => {
        item.style.color = "#000";
    });
    localStorage.setItem("dark-mode", "disabled");
};


if(darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); 
    if(darkMode == "disabled") {
        enableDarkMode();

    }else {
        disableDarkMode();
    }
})
