document.addEventListener("DOMContentLoaded", () => {});
import { Application } from "@splinetool/runtime";

const canvas = document.getElementById("canvas");
const app = new Application(canvas);
app.load("https://prod.spline.design/20dGyTTufZ-vZ9Ja/scene.splinecode");
