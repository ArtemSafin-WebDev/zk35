import polyfills from './polyfills';
import detectTouch from './detectTouch';
import debtSlider from './debtSlider';

document.addEventListener('DOMContentLoaded', function() {
    polyfills();
    detectTouch();
    debtSlider();
});

window.addEventListener('load', function() {
    const preloader = document.querySelector('.js-preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('preloader--hidden');
        }, 400);
    }
})
