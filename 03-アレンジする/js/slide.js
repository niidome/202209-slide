const swiper = new Swiper('.swiper', {
    // Optional parameters
    //    direction: 'vertical',
    loop: true,

    // スピードを調整
    speed: 300,
    spaceBetween: 100,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',

        // ページネーションをクリックでスライド
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    // 自動再生
    autoplay: true,

    // フェード
    effect: 'fade',

});
