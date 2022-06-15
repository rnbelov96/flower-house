export {};

const descSwiper = new Swiper('.desc__slider', {
  slidesPerView: 1,
  spaceBetween: 25,
  enabled: true,
  pagination: {
    el: '.desc__slider-pagination',
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const modelSwiper = new Swiper('.model__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.model__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.model__slider-btn_next',
    prevEl: '.model__slider-btn_prev',
  },
});

const categorySwiper = new Swiper('.category__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.category__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.category__slider-btn_next',
    prevEl: '.category__slider-btn_prev',
  },
});

const tendSwiper = new Swiper('.tend__slider', {
  spaceBetween: 10,
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.tend__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.tend__slider-btn_next',
    prevEl: '.tend__slider-btn_prev',
  },
});

// const swiper = new Swiper('.slidersection__slider', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   centeredSlides: true,
//   pagination: {
//     el: '.slidersection__slider-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.slidersection__slider-btn_next',
//     prevEl: '.slidersection__slider-btn_prev',
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
