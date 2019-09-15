new WOW().init();

jQuery(function ($) {
	$(".mask").mask("9(999) 999-9999");
});

$(document).ready(function () {
	$('.send').on("click", function () {
	   $('.overlay').fadeIn();
	});
	$('.popup-close').on("click", function () {
		$('.overlay').fadeOut();
	});
});

$(document).ready(function(){
    var link = $(".menu-link");
    var link_active = $('.menu-link_active');
    var menu = $('.menu');
    var navlink = $('.menu a')
    link.click(function(){
        link.toggleClass('menu-link_active ');
        menu.toggleClass('menu_active');
    });
    navlink.click(function(){
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
        
    });
});

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [54.752656, 56.002053],
            zoom: 18,
            behaviors: ['multiTouch']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF;  font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Добрый картон'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/header-logo.png',
            // Размеры метки.
            iconImageSize: [95, 30],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-47, -30]
        });

        

    myMap.geoObjects
        .add(myPlacemark);
});