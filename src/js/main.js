import "../scss/style.scss";
import "virtual:svg-icons-register";
import "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js";

// Load the Lottie animation
const animationContainer = document.getElementById('lottie');
const animationDataUrl = 'https://lottie.host/05a4076f-4ef3-4c62-87c3-4c7bdda65b2f/09VxGl9S2G.json';

// Load main animation
const mainAnimation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationDataUrl
});

// Set initial playback speed
lottie.setSpeed(2);

// Load star menu animation
const starMenuAnimationContainer = document.getElementById('idle-star--menu');
const animationMenu = lottie.loadAnimation({
    container: starMenuAnimationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationDataUrl
});

// Pause the animation menu for 4 seconds after each loop
animationMenu.addEventListener('loopComplete', () => {
    animationMenu.pause();
    setTimeout(() => {
        animationMenu.play();
    }, 4000); // 4000 milliseconds = 4 seconds
});