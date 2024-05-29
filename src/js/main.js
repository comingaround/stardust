import "../scss/style.scss";
import "virtual:svg-icons-register";
import "https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js";

// Function to load Lottie animations
function loadLottieAnimation(containerId, animationPath, loop = true, autoplay = true, speed = 1) {
    const container = document.getElementById(containerId);
    if (container) {
        const animation = lottie.loadAnimation({
            container: container,
            renderer: 'svg',
            loop: loop,
            autoplay: autoplay,
            path: animationPath
        });
        animation.setSpeed(speed);
        return animation;
    }
    console.error(`Container with id ${containerId} not found.`);
    return null;
}

// Function to hide the preloader and show the main content
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.style.animation = 'preloader 0.5s linear forwards';
}

// Load the main animation but do not autoplay
const mainAnimation = loadLottieAnimation('lottie', '/src/lotties/idle-star.json', false, false, 1.75);

if (mainAnimation) {
    mainAnimation.addEventListener('complete', () => {
        // Wait for 1 second after the animation completes
        setTimeout(() => {
            hidePreloader();
        }, 100);
    });

    // Delay the start of the main animation by 1 second
    setTimeout(() => {
        mainAnimation.play();
    }, 200);
}

// Load the star menu animation
const animationMenu = loadLottieAnimation('idle-star--menu', '/src/lotties/idle-star.json', true, true, 1.5);

// Pause the animation menu for 4 seconds after each loop
if (animationMenu) {
    animationMenu.addEventListener('loopComplete', () => {
        animationMenu.pause();
        setTimeout(() => {
            animationMenu.play();
        }, 4000); // 4000 milliseconds = 4 seconds
    });
}
