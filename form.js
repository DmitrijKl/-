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

const checkbox = document.getElementById("checkbox");
const labelCheckbox = document.querySelector(".checkbox__label");
const checkboxConfirm = document.getElementById("checkboxConfirm");
const labelCheckboxConfirm = document.querySelector(".label__confirm");

checkbox.addEventListener("change", () => {
  labelCheckbox.classList.toggle("active");
});
checkboxConfirm.addEventListener("change", () => {
  labelCheckboxConfirm.classList.toggle("active");
});

document.getElementById("tel").onkeydown = function (e) {
  inputphone(e, document.getElementById("tel"));
};

function inputphone(e, phone) {
  function stop(evt) {
    evt.preventDefault();
  }
  let key = e.key,
    v = phone.value;
  not = key.replace(/([0-9])/, 1);

  if (not == 1 || "Backspace" === not) {
    if ("Backspace" != not) {
      if (v.length < 3 || v === "") {
        phone.value = "+7(";
      }
      if (v.length === 6) {
        phone.value = v + ")";
      }
      if (v.length === 10) {
        phone.value = v + "-";
      }
      if (v.length === 13) {
        phone.value = v + "-";
      }
      if (v.length === 16) {
        stop(e);
      }
    }
  } else {
    stop(e);
  }
}
