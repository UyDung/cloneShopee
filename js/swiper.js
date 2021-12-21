const navSwiper = new Swiper(".nav-swiper", {
    speed: 700,
    slidesPerView: 1,
    autoplay: {
        delay: 4000,
    }, 
    pagination: {
        el: ".swiper-pagination-1",
        type: "bullets",
        clickable: true,
    }, 
    loop: true, 
    slideToClickedSlide: true,
});

const sloganSwiper = new Swiper(".slogan-swiper", {
    autoplay: false,
    speed: 100,
    grid: {
        rows: 2,
        fill: "column",
    },
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination-slogan",
        type: "bullets",
        clickable: true,
    },
});

const flashSwiper = new Swiper(".product-container", {
    autoplay: false,
    slidesPerView: "auto",
    loppedSlides: 11,
    speed: 300
});

const topSearchSwiper = new Swiper(".top-search-container", {
    autoplay: false,
    slidesPerView: "auto",    
});

const shopeeMallSwiper = new Swiper(".shopee-mall-swiper", {
    autoplay: {
        delay: 2000,
    },

    clickable: true,
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination-shopee",
        type: "bullets",
        clickable: true,
    },
});

const shopeeMallProducts = new Swiper(".shopee-mall-products", {
    
    slidesPerView: 'auto',
    loopedSlides: 3,
    spaceBetween: 10
});

const shopeeLiveItems = new Swiper(".shopee-live-list", {
    slidesPerView: 'auto',
    
})