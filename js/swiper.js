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
    grid: {
        rows: 2,
        fill: "column",
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    touchReleaseOnEdges: true,
    slidesPerView: 4,
    spaceBetween: 10,
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
            spaceBetween: 10,
            grid: {
                rows: 1,
            },
        },
    },
});

const flashSale = new Swiper(".product-container", {
    slidesPerView: 2,
    touchReleaseOnEdges: true,
    watchSlidesProgress: true,
    freeMode: {
        enabled: true,
        sticky: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 10,
            allowTouchMove: false,
            slidesPerGroup: 6,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const topSearch = new Swiper(".top-search-container", {
    slidesPerView: 2,
    touchReleaseOnEdges: true,
    watchSlidesProgress: true,
    spaceBetween: 10,
    freeMode: {
        enabled: true,
        sticky: true
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            allowTouchMove: false,
            spaceBetween: 30,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const topSearchMobile = new Swiper(".top-search-mobile-container", {
    slidesPerView: 2,
    touchReleaseOnEdges: true,
    watchSlidesProgress: true,
   
    freeMode: {
        enabled: true,
        sticky: true
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 6,
            allowTouchMove: false,
            spaceBetween: 30,
        },
    },
    
});

const shopeeMallMobile = new Swiper(".shopee-mall-swiper-mobile", {
    autoplay: {
        delay: 2000,
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    slidesPerView: 1,
    watchSlidesProgress: true,
    pagination: {
        el: ".swiper-pagination-shopee",
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
    spaceBetween: 0,
    pagination: {
        el: ".swiper-pagination-laptop",
        type: "bullets",
        clickable: true,
    },
});

const shopeeMallProducts = new Swiper(".shopee-mall-products", {
    watchSlidesProgress: true,
    slidesPerView: "auto",
    freeMode: {
        enabled: true,
        sticky: true
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
        },
        1024: {
            grid: {
                rows: 2,
                fill: "column",
            },
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const shopeeLiveList = new Swiper(".shopee-live-list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 'auto',
    freeMode: {
        enabled: true,
        sticky: true
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

const favoritiesList = new Swiper(".favorities-list", {
    
     freeMode: {
         enabled: true,
        sticky: true
     }
});

const categoryList = new Swiper(".category-list", {
    grid: {
        rows: 2,
        fill: "column",
    },
    freeMode: {
        enabled: true,
        sticky: true
    },
    slidesPerView: "auto",
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        1024: {
            slidesPerView: 10,
            slidesPerGroup:4,
            allowTouchMove: false,
            
        }
    }
});

/////////////////////// 
 const productThumbs = new Swiper(".product-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: {
        enabled: true,
        sticky: true
    },
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  
});

const products = new Swiper(".product-images", {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
        swiper: productThumbs,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
    }
});
 
const ratingthumbs  = new Swiper(".feedback-thumbs-items", {
    slidesPerView: "auto",
    watchSlidesProgress: true,
    spaceBetween: 10,
});

const feedbackList = new Swiper(".feedback-items-slides", {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: ratingthumbs, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const shopProducts = new Swiper(".recommendation-product-list", {
    slidesPerView: 6,

    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    freeMode: {
        enabled: true,
        sticky: true,
    },
    breakpoints: {
        768: {
            slidesPerGroup: 3,
        },
        1024: {
            slidesPerGroup: 4,
        },
        1200: {
            slidesPerGroup: 5,
        },
    },
});

// /////////////////////
 