const swiper = new Swiper('.swiper', {
    // Optional parameters
    //    direction: 'vertical',
    loop: true,

    // アニメーション間隔を調整 ミリ秒
    speed: 800,

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
    autoplay: {
        // 表示間隔 ミリ秒
        delay: 3000,
    },

    // フェード
    effect: 'fade',

});
