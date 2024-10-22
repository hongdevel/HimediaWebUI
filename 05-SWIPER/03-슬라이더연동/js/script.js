const bottomSlider = new Swiper(".bottom-slider", {
    loop: true,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
const topSlier = new Swiper(".top-slider", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: bottomSlider,
    },
});
