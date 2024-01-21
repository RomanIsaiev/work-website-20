// import Swiper from "swiper/bundle";
import Swiper from "swiper-bundle";

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});

const swiper2 = new Swiper(".mySwiper2", {
  loop: true,

  spaceBetween: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});
