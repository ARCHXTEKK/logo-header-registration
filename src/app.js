const headerLoginBtn = document.querySelector("#header-login");
const mobileMenu = document.querySelector("#mobile-menu");
const headerNav = document.querySelector(".nav");
const header = document.querySelector(".header");

const formInputs = document.querySelectorAll(".form__input");
const popupsCloseBtn = document.querySelector(".popups__close-btn");
const popup = document.querySelector(".popups");
const popupTitles = document.querySelectorAll(".popup__title");
const registerLink = document.querySelectorAll("#register-link");
const loginPopup = document.querySelector("#login-popup");
const registerPopup = document.querySelector("#register-popup");

const popupsFrame = document.querySelector(".popups__frame");

const popupShakeAnimationKeyframes = [
  { transform: "translateX(-1px)" },
  { transform: "translateX(0px)" },
  { transform: "translateX(1px)" },
  { transform: "translateX(0px)" },
];

const popupShakeAnimationOptions = {
  duration: 300,
  iterations: 2,
};

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("mobile-menu_active");
  headerNav.classList.toggle("nav_active");
  for (let i = 0; i < popupTitles.length; i++) {
    popupTitles[i].classList.toggle("popup__title_light");
  }
});

headerLoginBtn.addEventListener("click", () => {
  if (popup.classList.contains("popups_disabled")) {
    popup.classList.remove("popups_disabled");
    headerLoginBtn.classList.add("header__button_active");
  } else {
    popup.animate(popupShakeAnimationKeyframes, popupShakeAnimationOptions);
  }
});

popupsCloseBtn.addEventListener("click", () => {
  popup.classList.add("popups_disabled");
  headerLoginBtn.classList.remove("header__button_active");
});

popupsFrame.addEventListener("click", () => {
  loginPopup.classList.toggle("popups__el_unfocused");
  registerPopup.classList.toggle("popups__el_unfocused");
  popup.classList.toggle("popups_active");
});

for (let i = 0; i < registerLink.length; i++) {
  registerLink[i].addEventListener("click", () => {
    loginPopup.classList.toggle("popups__el_unfocused");
    registerPopup.classList.toggle("popups__el_unfocused");
    popup.classList.toggle("popups_active");
  });
}

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("change", () => {
    formInputs[i].classList.add("form__input_active");
    if (!formInputs[i].value) {
      formInputs[i].classList.remove("form__input_active");
    }
  });
}
