'use strict';

function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = function (theFile) {
            return function (e) {
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
                document.getElementById('list').insertBefore(span, null);
            };
        }(f);
        reader.readAsDataURL(f);
    }
}
var elementFiles = document.getElementById('files');
if (elementFiles) {
    document.getElementById('files').addEventListener('change', handleFileSelect, false);
}
// document.getElementById('files').addEventListener('change', handleFileSelect, false);
'use strict';

$(document).ready(function () {
	var plastersBrandList = {
		'1': {
			'name': 'Теплон Белый',
			'layer': 5,
			'min': 4,
			'max': 4.5,
			'pack': 30
		},
		'2': {
			'name': 'Теплон Серый',
			'layer': 10,
			'min': 8.5,
			'max': 9,
			'pack': 30
		},
		'3': {
			'name': 'Теплон Влагостойкий',
			'layer': 5,
			'min': 6,
			'max': 6.5,
			'pack': 25
		},
		'4': {
			'name': 'Теплон МН',
			'layer': 5,
			'min': 4,
			'max': 4.5,
			'pack': 30
		},
		'5': {
			'name': 'Стандарт Белый',
			'layer': 5,
			'min': 6.5,
			'max': 7.5,
			'pack': 30
		},
		'6': {
			'name': 'Стандарт Серый',
			'layer': 5,
			'min': 6.5,
			'max': 7.5,
			'pack': 30
		},
		'7': {
			'name': 'Силин Фасадный',
			'layer': 5,
			'min': 6,
			'max': 8,
			'pack': 25
		},
		'8': {
			'name': 'Силин Цокольный',
			'layer': 2,
			'min': 3.5,
			'max': 4.5,
			'pack': 25
		},
		'9': {
			'name': 'Силин для внутренних работ',
			'layer': 5,
			'min': 6,
			'max': 8,
			'pack': 25
		},
		'10': {
			'name': 'Шуба декор',
			'layer': 2,
			'min': 3.5,
			'max': 4.5,
			'pack': 25
		},
		'11': {
			'name': 'Короед декор',
			'layer': 2,
			'min': 3.5,
			'max': 4.5,
			'pack': 25
		},
		'12': {
			'name': 'Короед декор',
			'layer': 2,
			'min': 5,
			'max': 6.5,
			'pack': 25
		},
		'13': {
			'name': 'Mixter',
			'layer': 10,
			'min': 10,
			'max': 11,
			'pack': 30
		},
		'14': {
			'name': 'Гипсовая',
			'layer': 10,
			'min': 8,
			'max': 9,
			'pack': 30
		},
		'15': {
			'name': 'Оптимум',
			'layer': 10,
			'min': 10,
			'max': 11,
			'pack': 30
		},
		'16': {
			'name': 'Гипсовая Белая',
			'layer': 10,
			'min': 8,
			'max': 9,
			'pack': 30
		},
		'17': {
			'name': 'Цементно-Песчаная Универсальная',
			'layer': 10,
			'min': 11,
			'max': 12,
			'pack': 30
		},
		'18': {
			'name': 'Гипсовая Машинного Нанесения',
			'layer': 10,
			'min': 8,
			'max': 9,
			'pack': 30
		},
		'19': {
			'name': 'Цементно-Песчаная',
			'layer': 10,
			'min': 12.5,
			'max': 13.5,
			'pack': 25
		},
		'20': {
			'name': 'Штукатурный обрызг',
			'layer': 5,
			'min': 5,
			'max': 6,
			'pack': 25
		},
		'21': {
			'name': 'Короед',
			'layer': 1.7,
			'min': 2,
			'max': 2.5,
			'pack': 25
		},
		'22': {
			'name': 'Короед 3мм',
			'layer': 3,
			'min': 3.5,
			'max': 4,
			'pack': 25
		},
		'23': {
			'name': 'Шуба',
			'layer': 3,
			'min': 4,
			'max': 4.5,
			'pack': 25
		},
		'24': {
			'name': 'ПРОВЭЛЛ Т20 ШТУКАТУРНЫЙ ОБРЫЗГ',
			'layer': 1,
			'min': 1.6,
			'pack': 25
		},
		'25': {
			'name': 'СТАРТВЭЛЛ PC21 M',
			'layer': 10,
			'min': 13,
			'pack': 25
		},
		'26': {
			'name': 'СТАРТВЭЛЛ PC21',
			'layer': 10,
			'min': 16,
			'max': 17,
			'pack': 25
		},
		'27': {
			'name': 'БИГВЭЛЛ Т-22',
			'layer': 10,
			'min': 18,
			'pack': 25
		},
		'28': {
			'name': 'СЛИМВЭЛЛ PC23',
			'layer': 10,
			'min': 17,
			'pack': 25
		},
		'29': {
			'name': 'ФЛАЙВЭЛЛ PC24/1 ML',
			'layer': 10,
			'min': 10,
			'max': 11,
			'pack': 25
		},
		'30': {
			'name': 'ГИПСВЭЛЛ PG25',
			'layer': 10,
			'min': 9,
			'pack': 30
		},
		'31': {
			'name': 'ГИПСВЭЛЛ PG25 W',
			'layer': 10,
			'min': 9,
			'pack': 30
		},
		'32': {
			'name': 'ГИПСВЭЛЛ PG26 MW',
			'layer': 10,
			'min': 9,
			'pack': 30
		},
		'33': {
			'name': 'ГИПСВЭЛЛ PG26 M',
			'layer': 10,
			'min': 9,
			'pack': 30
		},
		'34': {
			'name': 'Аквалюкс',
			'layer': 10,
			'min': 15,
			'max': 17,
			'pack': 25
		},
		'35': {
			'name': 'Люкс',
			'layer': 10,
			'min': 6,
			'max': 7,
			'pack': 25
		},
		'36': {
			'name': 'Холст',
			'layer': 10,
			'min': 9,
			'max': 10,
			'pack': 30
		},
		'37': {
			'name': 'Слой',
			'layer': 10,
			'min': 8,
			'max': 9,
			'pack': 30
		},
		'38': {
			'name': 'Гипс Актив',
			'layer': 10,
			'min': 8,
			'max': 9,
			'pack': 30
		},
		'39': {
			'name': 'Пласт',
			'layer': 10,
			'min': 10,
			'pack': 30
		},
		'40': {
			'name': 'Цемент Актив',
			'layer': 10,
			'min': 11,
			'max': 12,
			'pack': 25
		},
		'41': {
			'name': 'Акваслой',
			'layer': 10,
			'min': 11,
			'max': 12,
			'pack': 25
		},
		'42': {
			'name': 'Аквапласт',
			'layer': 10,
			'min': 16,
			'max': 18,
			'pack': 25
		},
		'43': {
			'name': 'Цоколь',
			'layer': 10,
			'min': 14,
			'max': 15,
			'pack': 25
		},
		'44': {
			'name': 'Ротбанд',
			'layer': 10,
			'min': 8.5,
			'pack': 30
		},
		'45': {
			'name': 'Гольдбанд',
			'layer': 10,
			'min': 8.5,
			'pack': 30
		},
		'46': {
			'name': 'МП 75',
			'layer': 10,
			'min': 8,
			'max': 9,
			'pack': 30
		},
		'47': {
			'name': 'МН Старт',
			'layer': 10,
			'min': 10,
			'pack': 30
		},
		'48': {
			'name': 'ХП Старт',
			'layer': 10,
			'min': 10,
			'pack': 25
		},
		'49': {
			'name': 'Грюнбанд',
			'layer': 10,
			'min': 12,
			'pack': 25
		},
		'50': {
			'name': 'Унтерпутц',
			'layer': 10,
			'min': 17,
			'pack': 25
		},
		'51': {
			'name': 'Зокельпутц',
			'layer': 10,
			'min': 17,
			'pack': 25
		},
		'52': {
			'name': 'Адгезив',
			'layer': 5,
			'min': 5,
			'pack': 25
		},
		'53': {
			'name': 'BAU PUTZ GIPS',
			'layer': 10,
			'min': 11,
			'max': 13,
			'pack': 30
		},
		'54': {
			'name': 'BAU PUTZ ZEMENT',
			'layer': 10,
			'min': 16,
			'max': 18,
			'pack': 25
		},
		'55': {
			'name': 'BAU INTERIER',
			'layer': 10,
			'min': 12,
			'max': 13,
			'pack': 25
		},
		'56': {
			'name': 'PRIMA PUTZ GIPS',
			'layer': 10,
			'min': 9,
			'max': 12,
			'pack': 30
		},
		'57': {
			'name': 'PRIMA INTERIER',
			'layer': 10,
			'min': 12,
			'max': 13,
			'pack': 25
		},
		'58': {
			'name': 'PRIMA FACADE',
			'layer': 10,
			'min': 13,
			'max': 15,
			'pack': 25
		},
		'59': {
			'name': 'EASY PLASTER',
			'layer': 10,
			'min': 12,
			'max': 13,
			'pack': 25
		},
		'60': {
			'name': 'BAU BLOCK',
			'layer': 10,
			'min': 15,
			'max': 17,
			'pack': 25
		},
		'61': {
			'name': 'EASY BAND',
			'layer': 10,
			'min': 9,
			'pack': 30
		},
		'62': {
			'name': 'BAU TERMO',
			'layer': 10,
			'min': 16,
			'max': 18,
			'pack': 25
		},
		'63': {
			'name': 'UNTER BAU',
			'layer': 10,
			'min': 15,
			'pack': 30
		}
	};
	$('#calculator-plaster').submit(function (event) {
		event.preventDefault();
		var lengthWall = $('#lengthWall').val(),
		    widthWall = $('#widthWall').val(),
		    thickness = $('#thickness').val(),
		    lengthWallInside = $('#lengthWallInside').val(),
		    widthWallInside = $('#widthWallInside').val(),
		    plastersBrand = $('#plastersBrand').val();

		// площадь поверхности
		var yardage = lengthWall * widthWall;
		// выбранная штукатурка
		var plastersBrandSelected = plastersBrandList[plastersBrand];
		// общий расход на всю площадь
		var plastersRateMin = plastersBrandSelected.min / plastersBrandSelected.layer * thickness * yardage,
		    plastersRateMax = plastersBrandSelected.max / plastersBrandSelected.layer * thickness * yardage;
		// количество мешков
		var plastersBagMin = plastersRateMin / plastersBrandSelected.pack,
		    plastersBagMax = plastersRateMax / plastersBrandSelected.pack;

		// вывод результата
		$('#yardage').html(Math.round(yardage));

		if (isNaN(plastersRateMax)) {
			$('#plastersRate').html(Math.round(plastersRateMin));
			$('#plastersBag').html(Math.round(plastersBagMin));
		} else {
			$('#plastersRate').html(Math.round(plastersRateMin) + ' - ' + Math.round(plastersRateMax));
			$('#plastersBag').html(Math.round(plastersBagMin) + ' - ' + Math.round(plastersBagMax));
		}
		// console.log(plastersRateMin);
	});
});
'use strict';

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
'use strict';

$(document).ready(function () {
    $('.top-menu__mobile').click(function () {
        $('.top-menu__mobile, .top-menu__fixed, body, .mask').addClass('active');
    });

    $('.mask').click(function () {
        $('.top-menu__mobile, .top-menu__fixed, body, .mask').removeClass('active');
    });
});