$(document).ready(function () {
    $('.search__mobile').click(function () {
        $('.search__mobile, .search__form, body, .mask').addClass('active');
        setTimeout(function () {
        	$('.ya-site-form__input-text').focus();	
        }, 300);
    });

    $('.mask').click(function () {
        $('.search__mobile, .search__form, body, .mask').removeClass('active');
    });
});