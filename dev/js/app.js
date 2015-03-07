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

// Pluso Social
(function() {
    if (window.pluso)if (typeof window.pluso.start == "function") return;
    if (window.ifpluso==undefined) { 
        window.ifpluso = 1;
        var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
        s.type = 'text/javascript'; s.charset='UTF-8'; s.async = true;
        s.src = ('https:' == window.location.protocol ? 'https' : 'http')  + '://share.pluso.ru/pluso-like.js';
        var h=d[g]('body')[0];
        h.appendChild(s);
    }
})();