const swiper = new Swiper(".swiper", {
    speed: 500,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

swiper.autoPlay();
