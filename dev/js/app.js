$(document).ready(function() {
    $('.seo-hide')
        .after('<span class="more">Читать полностью</span>')
        .append('<div class="overflow"></div>')
        .append('<span class="opened">Свернуть</span>');
            
        $('.more').click(function() {
            $('.seo-hide').addClass('open')
            $(this).hide();
            $('.overflow').hide();
        });
        $('span.opened').click(function() {
            $('.seo-hide').removeClass('open');
            $('.more').show();
            $('.overflow').show();
        });
});