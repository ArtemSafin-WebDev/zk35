import Swiper from 'swiper/dist/js/swiper.js';

export default function() {
    const debtSliders = Array.from(document.querySelectorAll('.js-debt-slider'));

    debtSliders.forEach(debtSlider => {
        const container = debtSlider.querySelector('.swiper-container');
        new Swiper(container, {
            speed: 500,
            effect: window.matchMedia(`(max-width: ${700/16}em)`).matches ? 'slide' : 'fade',
            autoHeight: true,
            spaceBetween: 20,
            fadeEffect: {
                crossFade: true
            },
            watchOverflow: true,
            longSwipes: false,
            navigation: {
                nextEl: debtSlider.querySelector('.js-debt-slider-next'),
                prevEl: debtSlider.querySelector('.js-debt-slider-prev')
            }
        });
    });
}
