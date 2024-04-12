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

document.getElementById("date").onkeydown = function (e) {
  inputdate(e, document.getElementById("date"));
};
function inputdate(e, phone) {
  function stop(evt) {
    evt.preventDefault();
  }
  let key = e.key,
    v = phone.value;
  not = key.replace(/([0-9])/, 1);

  if (not == 1 || "Backspace" === not) {
    if ("Backspace" != not) {
      if (v.length === 4) {
        phone.value = v + ".";
      }
      if (v.length === 7) {
        phone.value = v + ".";
      }
      if (v.length === 8) {
        stop(e);
      }
    }
  } else {
    stop(e);
  }
}

const form = document.getElementById("form");
const male__inputs = document.querySelector(".male__inputs");

form.addEventListener("submit", sendForm);
async function sendForm(event) {
  event.preventDefault();
  let error = formValidate(form);
  if (!error) {
    const mainBlock = document.getElementById("mainBlock");
    mainBlock.classList.add("active");
  }
}
function formValidate(form) {
  let error = 0;
  let yearNow = new Date().getFullYear();
  let formReq = document.querySelectorAll("._req");
  formReq.forEach((element) => {
    const input = element;
    formRemoveError(input);

    if (input.classList.contains("_email")) {
      if (
        !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
          input.value
        )
      ) {
        formAddError(input);
        ++error;
      }
    }
    if (input.getAttribute("type") === "tel" && input.value.length < 16) {
      formAddError(input);
      ++error;
    }
    if (input.getAttribute("id") === "date") {
      let yearInput = new Date(input.value).getFullYear();
      console.log(yearNow, yearInput);
      if (input.value.length < 10 || yearNow < yearInput || yearInput < 1960) {
        formAddError(input);
        ++error;
      }
    }
    if (input.getAttribute("type") === "checkbox" && input.checked === false) {
      formAddError(input);
      ++error;
    }
    if (input.getAttribute("type") === "radio" && input.checked === false) {
      if (document.querySelector('input[name="radio"]:checked')) {
        return;
      } else {
        male__inputs.classList.add("active");
        formAddError(input);
        ++error;
      }
    }
    if (input.value === "") {
      formAddError(input);
      ++error;
    }
  });
  return error;
}

function formAddError(input) {
  input.classList.add("_error");
  input.parentElement.classList.add("_error_podpis");
}
function formRemoveError(input) {
  input.classList.remove("_error");
  input.parentElement.classList.remove("_error_podpis");
}

const selectJob = document.querySelector(".select__job");
const inputFio = document.querySelector(".input__fio");
const inputDate = document.querySelector(".input__date");
const inputTel = document.querySelector(".tel");
const inputEmail = document.querySelector(".email");
const inputConfirm = document.getElementById("checkboxConfirm");
const inputCapcha = document.getElementById("checkbox");
const inputRadio = document.querySelectorAll(".options__input");

function onClickFunction() {
  const checkedRadio = document.querySelector('input[name="radio"]:checked');
  formRemoveError(this);
  if (checkedRadio) {
    male__inputs.classList.remove("active");
    inputRadio.forEach((element) => formRemoveError(element));
  }
}

inputFio.onclick = onClickFunction;
inputDate.onclick = onClickFunction;
inputTel.onclick = onClickFunction;
inputEmail.onclick = onClickFunction;
inputConfirm.onclick = onClickFunction;
inputCapcha.onclick = onClickFunction;
inputRadio.onclick = onClickFunction;

selectJob.addEventListener("focus", () => {
  formRemoveError(selectJob);
});
inputRadio.forEach((element) => {
  return (element.onclick = onClickFunction);
});
