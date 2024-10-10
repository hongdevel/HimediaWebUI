const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true,
    speed: 1000 /* 기본값 300 */,
    effect: "slide" /* slide, fade, cube, flip, coverflow */,

    slidesPerView: 1 /* 캐러셀 만들기, 보여질 슬라이드 개수, 소수점 가능 */,
    spaceBetween: 20 /* 간격 20px */,

    // If we need pagination
    pagination: {
        el: ".top-slider-wrap .pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".top-slider-wrap .btn-next",
        prevEl: ".top-slider-wrap .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
