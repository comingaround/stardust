import "../scss/style.scss";
import "virtual:svg-icons-register";
import "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js";

// Load the Lottie animation
const animationContainer = document.getElementById('lottie');
const animationDataUrl = 'https://lottie.host/69d76559-73f6-4c6f-bb2b-6b546789772e/zsiTlYKSdX.json';

// Load main animation
const mainAnimation = lottie.loadAnimation({
    container: animationContainer,
    renderer: 'svg',
    loop: 2,
    autoplay: true,
    path: animationDataUrl
});

// Set initial playback speed
mainAnimation.setSpeed(1.75);

// Load star menu animation
const starMenuAnimationContainer = document.getElementById('idle-star--menu');
const animationMenu = lottie.loadAnimation({
    container: starMenuAnimationContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: animationDataUrl
});

animationMenu.setSpeed(1.5);

// Pause the animation menu for 4 seconds after each loop
animationMenu.addEventListener('loopComplete', () => {
    animationMenu.pause();
    setTimeout(() => {
        animationMenu.play();
    }, 4000); // 4000 milliseconds = 4 seconds
});
