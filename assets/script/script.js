"use strict";
const btnMobile = document.querySelector(".nav__btn-mobile");
const btnMobileClose = document.querySelector(".nav__btn-mobile-close");
const mobileMenu = document.querySelector(".nav__mobile");
const btnWinter = document.querySelector(".main__portfolio-button_winter");
const btnSpring = document.querySelector(".main__portfolio-button_spring");
const btnSummer = document.querySelector(".main__portfolio-button_summer");
const btnAutumn = document.querySelector(".main__portfolio-button_autumn");
const photoAll = document.querySelectorAll(".main__portfolio-img");
const btnSendMessage = document.querySelector(".footer__button");

btnMobile.addEventListener("click", (event) => {
  openBurgerMenu(event);
});
btnMobileClose.addEventListener("click", (event) => {
  closeBurgerMenu(event);
});
btnWinter.addEventListener("click", (item) => {
  openPhotoWinter(item);
});
btnSpring.addEventListener("click", (item) => {
  openPhotoSpring(item);
});
btnSummer.addEventListener("click", (item) => {
  openPhotoSummer(item);
});
btnAutumn.addEventListener("click", (item) => {
  openPhotoAutumn(item);
});
btnSendMessage.addEventListener("click", () => {
  sendingData();
});
function openBurgerMenu(event) {
  mobileMenu.classList.remove("nav__mobile_hidden");
  btnMobile.classList.add("nav__btn-mobile_hidden");
  btnMobileClose.classList.remove("nav__btn-mobile-close");
}
function closeBurgerMenu(event) {
  mobileMenu.classList.add("nav__mobile_hidden");
  btnMobileClose.classList.add("nav__btn-mobile-close");
  btnMobile.classList.remove("nav__btn-mobile_hidden");
}

function openPhotoWinter() {
  photoAll.forEach(function (item) {
    const photoSelection = document.querySelector(
      ".main__portfolio-img_forest"
    );
    item.classList.toggle("main__portfolio-none");
    photoSelection.classList.remove("main__portfolio-none");
  });
}
function openPhotoSpring() {
  photoAll.forEach(function (item) {
    const photoSelection = document.querySelector(".main__portfolio-img_love");
    item.classList.toggle("main__portfolio-none");
    photoSelection.classList.remove("main__portfolio-none");
  });
}
function openPhotoSummer() {
  photoAll.forEach(function (item) {
    const photoSelection = document.querySelector(
      ".main__portfolio-img_hourse"
    );
    item.classList.toggle("main__portfolio-none");
    photoSelection.classList.remove("main__portfolio-none");
  });
}
function openPhotoAutumn() {
  
  photoAll.forEach(function (item) {
    const photoSelection = document.querySelector(".main__portfolio-img_child");
    const photoSelect = document.querySelector(".main__portfolio-img_autumn");
    const photo = document.querySelector(".main__portfolio-img_phone");
    item.classList.toggle("main__portfolio-none");
    photoSelection.classList.remove("main__portfolio-none");
    photoSelect.classList.remove("main__portfolio-none");
    photo.classList.remove("main__portfolio-none");
  });
}
function sendingData() {
  const inputEmail = document.querySelector(".footer__emeil");
  const inputPhone = document.querySelector(".footer__phone");
  const inputMessage = document.querySelector(".footer__message");
  const objContact = {
    email: inputEmail.value,
    phone: inputPhone.value,
    message: inputMessage.value,
  };
  console.log(objContact);
}

// const objClassImg = {
//   photoForest: document.querySelector(".main__portfolio-img_forest"),
//   photoPeople: document.querySelector(".main__portfolio-img_people"),
//   photoHourse: document.querySelector(".main__portfolio-img_hourse"),
//   photoChild: document.querySelector(".main__portfolio-img_child"),
//   photoLove: document.querySelector(".main__portfolio-img_love"),
//   photoPhone: document.querySelector(".main__portfolio-img_phone"),
// };
// let {
//   photoForest,
//   photoPeople,
//   photoHourse,
//   photoChild,
//   photoLove,
//   photoPhone,
// } = objClassImg;
// console.log(objClassImg);
