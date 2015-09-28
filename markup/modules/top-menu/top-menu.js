$(document).ready(function () {
    $('.top-menu__mobile').click(function () {
        $('.top-menu__mobile, .top-menu__fixed, body, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.top-menu__mobile, .top-menu__fixed, body, .mask').removeClass('active');
    });
});