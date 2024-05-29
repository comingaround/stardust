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

// Load the main animation
loadLottieAnimation('lottie', '/src/lotties/idle-star.json', 2, true, 1.75);

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
