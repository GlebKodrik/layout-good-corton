$('.production-slider_top').slick({
			arrows: false , 
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.production-slider_bottom'
		});
		$('.production-slider_bottom').slick({
			arrows: true , 
			slidesToShow: 4,
			slidesToScroll: 1,
			focusOnSelect: true,
			responsive: [
			 
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],

			prevArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_left"></div>',
			nextArrow: '<div class="slider-arrow slider-arrow_prod slider-arrow_right"></div>',
			asNavFor: '.production-slider_top'
		});
		$('.feedback-slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			responsive: [
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			    }
			  ],
			prevArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow-feedback-left slider-arrow__client-info-left"></div>',
			nextArrow: '<div class="slider-arrow slider-arrow_feedback slider-arrow-feedback-right slider-arrow__client-info-right"></div>'
		});
		$('.main-img').slick({
			speed: 500,
			fade: true,
			cssEase: 'linear',
			arrows: false,
			autoplay: true ,
			autoplaySpeed: 4000,
			asNavFor: '.main-slider__title'
		});
		$('.main-slider__title').slick({
			arrows: false,
			asNavFor: '.main-img'
		});