/**
 * @param DarkMode
 */
const toggleBtn = document.getElementById("toggle_mode");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode"),
    header__menu = document.querySelector(".header__menu"),
    tagA = document.querySelectorAll("a");

const enableDarkMode = () => {
    theme.classList.add('dark-mode-theme');
    header__menu.style.backgroundColor = "#000";
    tagA.forEach(item => {
        item.style.color = "#fff";
    });
    localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
    theme.classList.remove("dark-mode-theme");
    header__menu.style.backgroundColor = "#fff";
    tagA.forEach(item => {
        item.style.color = "#000";
    });
    localStorage.setItem("dark-mode", "disabled");
};


if (darkMode === "enabled") {
    enableDarkMode();
}

toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode");
    if (darkMode == "disabled") {
        enableDarkMode();

    } else {
        disableDarkMode();
    }
});


/**
 * 
 * @param {modal} modalFunction 
 */
const closeModalTag = document.querySelector(".modal__close");
const modalWindow = document.querySelector(".overlay");
const modalTimerId = setTimeout(() =>
    openModal(".overlay", modalTimerId), 2000);


closeModalTag.addEventListener("click", () => {
    closeModal(".overlay")
});

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "none";
    modal.classList.toggle("active");
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "block";
    modal.classList.toggle("active");

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId)
    }
}


/**
 * @param inputsModal
 */

const modalForm = document.getElementById("modalForm"),
    formInputs = modalForm.querySelectorAll("input"),
    formBtn = modalForm.querySelector(".button");

function validashionInput(inputs) {
    inputs.forEach(input => {
        if (input.value) {
            return true;
        }
    });

    return false;
}

const userName = formInputs[0].value;
let cookie_date = new Date();
let deadline = timer("2022-06-22");
cookie_date.setDate(deadline.days);

    formBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formInputs.forEach(input => {
            if (input.value) {
                if (input.getAttribute("name") == "username") {

                    document.cookie = `name=${input.value};max-age=864000;expires=${cookie_date.toUTCString()}`;
                }else if(input.getAttribute("name") == "email") {

                }
            }
        });
    });


    // document.cookie = "name="+ userName + ";expires=" +cookie_date.toUTCString();

/**
 * @param time
 */

function timer(deadline) {
    let getTimerRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor((t / (1000 * 60 * 60 * 24))),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };

    };

    return getTimerRemaining(deadline);


}

