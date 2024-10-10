const topSlider = new Swiper(".top-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    speed: 1000 /* 기본값 300 */,
    effect: "slide" /* slide, fade, cube, flip, coverflow */,

    slidesPerView: 1 /* 캐러셀 만들기, 보여질 슬라이드 개수, 소수점 가능 */,
    spaceBetween: 20 /* 간격 20px */,
    centeredSlides: true,

    // RWD setting : min-width, 모바일부터 PC까지 설정
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 5,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
