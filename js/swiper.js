const navSwiper = new Swiper(".main-banner", {
    speed: 700,
    slidesPerView: 1,
    watchSlidesProgress : true,
    
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
    grid: {
        rows: 2,
        fill: "column",
    },
    touchReleaseOnEdges: true,
    slidesPerView: "auto",
    loopedSlides: 14,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination-slogan",
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        1024: {
            slidesPerView: 8,
            grid: {
                rows: 1,
            },
        },
    },
});

const flashSwiper = new Swiper(".product-container", {
    slidesPerView: 2,
    touchReleaseOnEdges: true,
    watchSlidesProgress: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
        },
    },
});

const topSearchSwiper = new Swiper(".top-search-container", {
    slidesPerView: 2,
    touchReleaseOnEdges: true,
    watchSlidesProgress: true,
 
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});

const shopeeMallSwiper = new Swiper(".shopee-mall-swiper", {
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 1,
    watchSlidesProgress : true,
    pagination: {
        el: ".swiper-pagination-mobile",
        type: "bullets",
        clickable: true,
    },
});

const shopeeMallLaptop = new Swiper(".shopee-mall-swiper-laptop", {
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 1,
    watchSlidesProgress: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination-laptop",
        type: "bullets",
        clickable: true,
    },
});

const shopeeMallProducts = new Swiper(".shopee-mall-products", {
    watchSlidesProgress: true,    
    slidesPerView: "auto",
 
    spaceBetween: 10,   
    cssMode: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

const shopeeLiveList = new Swiper(".shopee-live-list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 'auto',
    cssMode: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

const thienthan = new Swiper(".favorities-list", {
   watchSlidesProgress: true,
    slidesPerView: 'auto',
     
});

const categoryList = new Swiper(".category-list", {
    grid: {
        rows: 2,
        fill: "column",
    },
    slidesPerView: "auto",
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});