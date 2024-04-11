const btnCloseModal = document.querySelector(".btn__window_close");
const btnOpenModal = document.querySelector(".modal__politics");
const divModalWindow = document.querySelector(".popup");

btnCloseModal.addEventListener("click", (event) => {
  divModalWindow.classList.toggle("active");
});
btnOpenModal.addEventListener("click", (event) => {
  divModalWindow.classList.toggle("active");
});

const popupTitleActive = document.querySelector(".popup__title");
const popupHeader = document.querySelector(".popup__header");
const contentTitle = document.querySelector(".content__title");
const popup = document.querySelector(".popup");

const headerHeight = popupHeader.offsetTop;
const contentTitleHeight = contentTitle.offsetTop;

popup.addEventListener("scroll", () => {
  const scrollPopup = popup.scrollTop;
  console.log(scrollPopup);
  console.log(contentTitleHeight, "title");
  if (scrollPopup > contentTitleHeight) {
    popupTitleActive.classList.add("active");
    popupHeader.classList.add("active");
  } else {
    popupTitleActive.classList.remove("active");
    popupHeader.classList.remove("active");
  }
});
const popupBody = document.querySelector(".popup__body");

popupBody.addEventListener("click", (event) => {
  if (event.currentTarget === event.target) {
    divModalWindow.classList.toggle("active");
  }
});
