function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
        continue;
        }
    var reader = new FileReader();
    reader.onload = (function (theFile) {
        return function(e) {
        var span = document.createElement('span');
        span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
            document.getElementById('list').insertBefore(span, null);
        };
    })(f);
    reader.readAsDataURL(f);
    }
}
var elementFiles = document.getElementById('files');
if(elementFiles) {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}
// document.getElementById('files').addEventListener('change', handleFileSelect, false);
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
$(document).ready(function () {
    $('.top-menu__mobile').click(function () {
        $('.top-menu__mobile, .top-menu__fixed, body, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.top-menu__mobile, .top-menu__fixed, body, .mask').removeClass('active');
    });
});