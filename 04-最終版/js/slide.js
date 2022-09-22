window.addEventListener('load', (event) => {
    const swiper = new Swiper(
        '.swiper',
        {
            loop: true,
            speed: 1500,
            navigation: {
                enabled: false,
            },
            followFinger: false,
            autoplay: {
                delay: 3500,
            },
            effect: 'fade',
        }
    );
});