const navSwiper = new Swiper(".nav-swiper", {
    speed: 500,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: "#swiper-pagination-1",
    },
});

const sloganSwiper = new Swiper(".slogan-swiper", {
    autoplay: false,
    grid: {
        rows: 2,
        fill: "column",
    },
    slidesPerView: 4,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
    },
});
