// Свайпер с двумя слайдами
var swiper = new Swiper(".mySwiperFirst", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper__btn_next",
    prevEl: ".swiper__btn_prev",
  },
  speed: 700,
});

//Свайпер с вакансиями

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "4",
  spaceBetween: "30px",
  // centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1.2,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    731: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    746: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    800: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1012: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1210: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 3.7,
      spaceBetween: 30,
    },
    1900: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".btn__right_slide",
    prevEl: ".btn__left_slide",
  },
  speed: 500,
});

const CATIGORIES_DATA = [
  {
    lat: 55.77767065455169,
    lon: 37.58627482997361,
    category: "ЮрЛицо",
    name: "Метка 1 - Юр-Лицо",
  },
  {
    lat: 55.75526687360908,
    lon: 37.573400181846,
    category: "ЮрЛицо",
    name: "Метка 2 - Юр-Лицо",
  },
  {
    lat: 55.75267227043276,
    lon: 37.61822931206058,
    category: "ЮрЛицо",
    name: "Метка 3 - Юр-Лицо",
  },
  {
    lat: 55.744885842606765,
    lon: 37.6644012668468,
    category: "ЮрЛицо",
    name: "Метка 4 - Юр-Лицо",
  },

  {
    lat: 55.741324908053265,
    lon: 37.587302742886074,
    category: "ФизЛицо",
    name: "Метка 1 - Физ-Лицо",
  },
  {
    lat: 55.735395259904195,
    lon: 37.65684816626088,
    category: "ФизЛицо",
    name: "Метка 2 - Физ-Лицо",
  },
  {
    lat: 55.77162392340773,
    lon: 37.594855843472025,
    category: "ФизЛицо",
    name: "Метка 3 - Физ-Лицо",
  },
  {
    lat: 55.76223666033239,
    lon: 37.60893207638215,
    category: "ФизЛицо",
    name: "Метка 4 - Физ-Лицо",
  },
  {
    lat: 55.76010727455205,
    lon: 37.66643863766148,
    category: "ФизЛицо",
    name: "Метка 5 - Физ-Лицо",
  },
  {
    lat: 55.775106825289775,
    lon: 37.62180869014683,
    category: "ФизЛицо",
    name: "Метка 6 - Физ-Лицо",
  },
];

ymaps.ready(init);

const yrFace = document.querySelector(".btn__yr");
const fizFace = document.querySelector(".btn__fiz");
const allFace = document.querySelector(".btn__all");
let center = [55.75273547359605, 37.626556195800795];
const placemark1 = [55.772711261333136, 37.62803526313407];
let activeCategory = "";

const contentPlaceMark = (item) => ({
  hintContent: `<strong>${item}</strong>`,
  balloonContent: `
  <div class='balloon'>
  <div class='baloon_address'>ул.Париж</div>
  <div class = 'baloon_name'>
  ${item}
  </div>
  <span>Парикмахер</span>
  </div>
`,
});
const iconPlaceMark = () => ({
  iconLayout: "default#image",
  iconImageHref: "./images/LogoForMap.svg",
  iconImageSize: [40, 40],
  iconImageOffset: [0, 0],
});

function init() {
  var map = new ymaps.Map("map", {
    center: center, // ваши данные
    zoom: 12,
  });

  function showCategory(category) {
    map.geoObjects.removeAll();
    CATIGORIES_DATA.filter((element) =>
      element.category.includes(activeCategory)
    ).forEach((item) => {
      const placemark = new ymaps.Placemark(
        [item.lat, item.lon],
        contentPlaceMark(item.name),
        iconPlaceMark()
      );
      map.geoObjects.add(placemark);
    });
  }
  showCategory(activeCategory);

  const zoomPlus = document.querySelector(".zoom__plus");
  const zoomMinus = document.querySelector(".zoom__minus");
  zoomPlus.addEventListener("click", function () {
    map.setZoom(map.getZoom() + 1);
  });
  zoomMinus.addEventListener("click", function () {
    map.setZoom(map.getZoom() - 1);
  });

  yrFace.addEventListener("click", function () {
    activeCategory = "ЮрЛицо";
    showCategory(activeCategory);
  });
  fizFace.addEventListener("click", function () {
    activeCategory = "ФизЛицо";
    showCategory(activeCategory);
  });
  allFace.addEventListener("click", function () {
    activeCategory = "";
    showCategory(activeCategory);
  });

  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
}

const btnGrid = document.querySelector(".toggle__btn");
const gridContainer = document.querySelector(".grid");
let buttonGridState = false;
const cloneNodeGrid = gridContainer.cloneNode(true);
let elementsForGrid;

const mediaQueryMaxWidth = window.matchMedia("(max-width: 1016px)");
const mediaQueryMinWidth = window.matchMedia("(min-width: 1016px)");
function handleTabletChange(e) {
  if (e.matches) {
    elementsForGrid = `<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>`;
  }
}
function handleTabletChangeMinWidth(e) {
  if (e.matches) {
    elementsForGrid = `<div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>`;
  }
}
mediaQueryMaxWidth.addListener(handleTabletChange);
handleTabletChange(mediaQueryMaxWidth);
mediaQueryMinWidth.addListener(handleTabletChangeMinWidth);
handleTabletChangeMinWidth(mediaQueryMinWidth);

btnGrid.addEventListener("click", function (e) {
  if (!buttonGridState) {
    gridContainer.insertAdjacentHTML("beforeend", elementsForGrid);
    btnGrid.textContent = "cкрыть";
    buttonGridState = true;
  } else {
    gridContainer.innerHTML = `<div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>`;
    btnGrid.textContent = "показать ещё";
    buttonGridState = false;
  }
});

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
