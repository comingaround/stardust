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

function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    preloader.style.animation = 'preloader 1.25s linear forwards';
}

const mainAnimation = loadLottieAnimation('lottie', '/src/lotties/idle-star.json', false, false, 1.25);

if (mainAnimation) {
    mainAnimation.addEventListener('complete', () => {
        // Wait for 1 milisecond after the animation completes
        setTimeout(() => {
            hidePreloader();
        }, 10);
    });

    // Delay the start of the main animation by 0.1 second
    setTimeout(() => {
        mainAnimation.play();
    }, 100);
}

setTimeout(() => {
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
}, 2500); // 4000 milliseconds = 4 seconds delay
