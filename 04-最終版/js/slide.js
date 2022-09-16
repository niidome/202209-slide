window.addEventListener('load', (event) => {
    const swiper = new Swiper(
        '.swiper',
        {
            loop: true,
            speed: 1500,
            spaceBetween: 100,
            navigation: {
                enabled: false,
            },
            followFinger: false,
            autoplay: true,
            effect: 'fade',
        }
    );
});