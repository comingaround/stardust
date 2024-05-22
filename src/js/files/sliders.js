import "swiper/css";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

document.addEventListener("DOMContentLoaded", () => {
  const newsSlider = document.querySelector(".news__slider");
  if (newsSlider) {
    new Swiper(newsSlider, {
      modules: [Navigation],
      spaceBetween: 36,
      slidesPerView: 4,
      breakpoints: {
        320: {
          slidesPerView: "auto",
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 36,
        },
      },
    });
  }
});
