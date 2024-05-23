import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas");
const app = new Application(canvas);
app.load("https://prod.spline.design/20dGyTTufZ-vZ9Ja/scene.splinecode");
// document.addEventListener("DOMContentLoaded", () => {
//   const list = document.querySelector(".header__list");
//   const allElement = list.querySelectorAll("a svg, a span");
//   list.addEventListener("mouseover", (e) => {
//     allElement.forEach((el) => {
//       console.log(el);
//       el.style.animation = "none";
//       el.offsetHeight;
//       el.style.animation = null;
//       el.style.transition = "0.5s easy";
//     });
//   });
// });
