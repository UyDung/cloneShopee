const navSwiper = new Swiper(".nav-swiper", {
    speed: 500,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

const sloganSwiper = new Swiper(".slogan-swiper", {
    speed: 500,
    slidesPerView: 4,
    autoplay: {
        delay: 5000,
    },
    grid: {
        row: 2
    }
});
