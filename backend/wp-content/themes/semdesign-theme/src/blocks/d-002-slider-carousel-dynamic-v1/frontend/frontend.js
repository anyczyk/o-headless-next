document.addEventListener('DOMContentLoaded', () => {
    const swiperContainers = document.querySelectorAll('.swiper-carousel-dynamic');

    swiperContainers.forEach((container) => {
        const clickable = container.dataset.paginationClickable === 'true';
        const autoPlay = container.dataset.autoplay === 'true';
        const wrapModule = container.closest('.wp-block-semdesign-d-002-slider-carousel-dynamic-v1-wrap');
        new Swiper(container, {
            slidesPerView: 2,
            loop: true,
            centeredSlides: true,
            spaceBetween: 8,
            autoHeight: false,
            autoplay: autoPlay ? { delay: 5000 } : false,
            navigation: {
                nextEl: wrapModule.querySelector('.swiper-button-next'),
                prevEl: wrapModule.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: wrapModule.querySelector('.swiper-pagination'),
                clickable: clickable,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2.3,
                    spaceBetween: 24,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                }
            },
        });
    });
});