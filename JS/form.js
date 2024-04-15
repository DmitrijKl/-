// Работа с модальным окном
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

// Добавление active__label в chekbox
const checkbox = document.getElementById("checkbox");
const labelCheckbox = document.querySelector(".checkbox__label");
const checkboxConfirm = document.getElementById("checkboxConfirm");
const labelCheckboxConfirm = document.querySelector(".label__confirm");

checkbox.addEventListener("change", () => {
  labelCheckbox.classList.toggle("active__label");
  toggleActiveButton();
});
checkboxConfirm.addEventListener("change", () => {
  labelCheckboxConfirm.classList.toggle("active__label");
  toggleActiveButton();
});

// Валидация Input telefon
const labelNum = document.querySelector(".label__num");

document.getElementById("tel").onkeydown = function (e) {
  inputphone(e, document.getElementById("tel"));
};
document.getElementById("tel").onkeyup = function (event) {
  if (event.target.value.length === 16) {
    labelNum.classList.add("active__label");
    toggleActiveButton();
  }
};
function inputphone(e, phone) {
  function stop(evt) {
    evt.preventDefault();
  }
  let key = e.key,
    v = phone.value;
  not = key?.replace(/([0-9])/, 1);

  if (not == 1 || "Backspace" === not) {
    if ("Backspace" != not && v.length === 15) {
      labelNum.classList.add("active__label");
      toggleActiveButton();
    }
    if ("Backspace" === not && v.length === 16) {
      labelNum.classList.remove("active__label");
      toggleActiveButton();
    }

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
      if (v.length === 14) {
      }

      if (v.length === 16) {
        stop(e);
      }
    }
  } else {
    stop(e);
  }
}
// Валидация input с типом Email
document.getElementById("email").onkeyup = function (event) {
  inputemailValid(event);
};
const labelEmail = document.querySelector(".label__email");

function inputemailValid(event) {
  toggleActiveButton(event);
  const validEmail =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  if (validEmail.test(event.target.value)) {
    labelEmail.classList.add("active__email");
    toggleActiveButton(event);
  } else {
    labelEmail.classList.remove("active__email");
    toggleActiveButton(event);
  }
}
// Валидация inputFIO
document.getElementById("fio").onkeyup = function (event) {
  inputFioValid(event);
};
const labelFio = document.querySelector(".label__fio");

function inputFioValid(event) {
  if (event.target.value.trim().length > 3) {
    labelFio.classList.add("active__label");
    toggleActiveButton();
  } else {
    labelFio.classList.remove("active__label");
    toggleActiveButton();
  }
}
// Валидация inputMALE(RadioBtn)
const labelMale = document.querySelector(".male");
document.getElementById("radioMan").onchange = function (event) {
  inputGenderValid(event);
};
document.getElementById("radioWomen").onchange = function (event) {
  inputGenderValid(event);
};
function inputGenderValid(event) {
  const checkedMale = document.querySelector('input[name="radio"]:checked');
  if (checkedMale) {
    labelMale.classList.add("active__label");
    toggleActiveButton();
  } else {
    labelMale.classList.remove("active__label");
    toggleActiveButton();
  }
}

// Валидация Selection
const labelSelection = document.querySelector(".label__vacation");
document.getElementById("job").onchange = function (event) {
  inputSelectionValid(event);
};
function inputSelectionValid(event) {
  if (event.target.value) {
    labelSelection.classList.add("active__label");
    toggleActiveButton();
  } else {
    labelSelection.classList.remove("active__label");
    toggleActiveButton();
  }
}
// Валидация Input тип Date

const labelDate = document.querySelector(".label__date");
document.getElementById("date").onkeyup = function (event) {
  inputDateValid(event);
};
let yearNow = new Date().getFullYear();
function inputDateValid(event) {
  let yearInputDate = new Date(event.target.value).getFullYear();

  if (
    (event.target.value.length =
      10 && yearNow > yearInputDate && yearInputDate > 1960)
  ) {
    labelDate.classList.add("active__label");
    toggleActiveButton();
  } else {
    labelDate.classList.remove("active__label");
    toggleActiveButton();
  }
}
// Active button for Submit FORM
const btnSubmit = document.querySelector(".submit");
let allActiveLabel = document.getElementsByClassName("active__label");
let emailValid = document.getElementsByClassName("active__email");

function toggleActiveButton(eventEmail) {
  if (eventEmail?.target.value.trim().length > 0) {
    if (allActiveLabel.length >= 7 && emailValid.length) {
      btnSubmit.classList.add("activ");
    } else {
      btnSubmit.classList.remove("activ");
    }
    return;
  } else {
    if (allActiveLabel.length >= 7) {
      btnSubmit.classList.add("activ");
    } else {
      btnSubmit.classList.remove("activ");
    }
  }
}

// Работа с формой перед отправкой
const form = document.getElementById("form");
const male__inputs = document.querySelector(".male__inputs");

form.addEventListener("submit", sendForm);
async function sendForm(event) {
  event.preventDefault();
  let error = formValidate(form);
  if (!error) {
    const mainBlock = document.getElementById("mainBlock");
    const mainSuccessfully = document.getElementById("successfully");
    const footer = document.getElementById("footer");
    mainSuccessfully.classList.add("active");
    mainBlock.classList.add("active");
    footer.classList.add("footer");
    localStorage.setItem("SendForm", true); //Если нужно
    window.scrollTo(0, 0);
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
      if (input.value.trim().length > 1) {
        if (
          !/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
            input.value
          )
        ) {
          formAddError(input);
          ++error;
        } else {
          return;
        }
      }
    }
    if (input.getAttribute("type") === "tel" && input.value.length < 16) {
      formAddError(input);
      ++error;
    }
    if (input.getAttribute("id") === "date") {
      let yearInput = new Date(input.value).getFullYear();
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
    if (input.getAttribute("type") === "text" && input.value === "") {
      formAddError(input);
      ++error;
    }
    if (input.getAttribute("name") === "job" && input.value === "") {
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

// Удаление error из инпута по клику
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
  selectJob.style.color = "black";
  selectJob.removeAttribute("disabled");
  formRemoveError(selectJob);
});
selectJob.addEventListener("", () => {
  console.log("asds");
  selectJob.removeAttribute("disabled");
});
inputRadio.forEach((element) => {
  return (element.onclick = onClickFunction);
});
// Если нужно запомнить
// if (localStorage.getItem("SendForm")) {
//   const mainBlock = document.getElementById("mainBlock");
//   const mainSuccessfully = document.getElementById("successfully");
//   const footer = document.getElementById("footer");
//   mainSuccessfully.classList.add("active");
//   mainBlock.classList.add("active");
//   footer.classList.add("footer");
//   //Если нужно
// }
