(function($){
	"use strict";

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-light').addClass("is-sticky");
		}
		else{
			$('.navbar-light').removeClass("is-sticky");
		}
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		autoHeight: true,
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		]
	});
	$('.homepage-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		autoHeight: true,
		animateOut: "slideOutDown",
		animateIn: "slideInDown",
		navText: [
			"<i class='icofont-rounded-left'></i>",
			"<i class='icofont-rounded-right'></i>"
		]
	});
	$(".home-slides").on("translate.owl.carousel", function(){
		$(".home-slides .banner-image").removeClass("animated fadeInDown").css("opacity", "0");
		$(".home-slides h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".home-slides p").removeClass("animated zoomIn").css("opacity", "0");
		$(".home-slides .btn").removeClass("animated fadeInDown").css("opacity", "0");
		$(".home-slides .video-btn").removeClass("animated fadeInDown").css("opacity", "0");
	});
	$(".home-slides").on("translated.owl.carousel", function(){
		$(".home-slides .banner-image").addClass("animated fadeInDown").css("opacity", "1");
		$(".home-slides h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".home-slides p").addClass("animated zoomIn").css("opacity", "1");
		$(".home-slides .btn").addClass("animated fadeInDown").css("opacity", "1");
		$(".home-slides .video-btn").addClass("animated fadeInDown").css("opacity", "1");
	});
	$(".homepage-slides").on("translate.owl.carousel", function(){
		$(".homepage-slides .banner-image").removeClass("animated fadeInUp").css("opacity", "0");
		$(".homepage-slides h1").removeClass("animated fadeInUp").css("opacity", "0");
		$(".homepage-slides p").removeClass("animated fadeInUp").css("opacity", "0");
		$(".homepage-slides .btn").removeClass("animated fadeInUp").css("opacity", "0");
		$(".homepage-slides .video-btn").removeClass("animated fadeInUp").css("opacity", "0");
	});
	$(".homepage-slides").on("translated.owl.carousel", function(){
		$(".homepage-slides .banner-image").addClass("animated fadeInUp").css("opacity", "1");
		$(".homepage-slides h1").addClass("animated fadeInUp").css("opacity", "1");
		$(".homepage-slides p").addClass("animated fadeInUp").css("opacity", "1");
		$(".homepage-slides .btn").addClass("animated fadeInUp").css("opacity", "1");
		$(".homepage-slides .video-btn").addClass("animated fadeInUp").css("opacity", "1");
	});
	
	// Popup Video
	$('.video-btn').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Shorting
	$(function(){
		$('.shorting').mixItUp();
	});

	// Repair Banner Content Slides
	$('.repair-content-slides').owlCarousel({
		loop: false,
		autoplay: true,
		nav: false,
		items: 1,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
	});

	// Popup Gallery
	$('.popup-btn').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		}
	});

	// Project Slides
	$('.project-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		margin: 30,
		dots: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Pricing Tabs
	$(".tab-slider-body").hide();
	$(".tab-slider-body:first").show();
	$(".tab-slider-nav li").on('click', function() {
		$(".tab-slider-body").hide();
		var activeTab = $(this).attr("rel");
		$("#"+activeTab).fadeIn();
		if($(this).attr("rel") == "yearly"){
			$('.tab-slider-tabs').addClass('slide');
		}else{
			$('.tab-slider-tabs').removeClass('slide');
		}
		$(".tab-slider-nav li").removeClass("active");
		$(this).addClass("active");
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		let odo = $(".odometer");
		odo.each(function() {
			let countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Feedback Slides
	$('.feedback-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		margin: 30,
		dots: true,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items:1,
			},
			768: {
				items:2,
			},
			1200: {
				items:3,
			}
		}
	});

	// Partner Slides
	$('.partner-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: true,
		margin: 30,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1200: {
				items: 6,
			}
		}
	});

	// Blog Slides
	$('.blog-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: true,
		margin: 30,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Repair Services Slider
	$('.repair-services-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: true,
		margin: 30,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Repair Feedback Slides
	$('.repair-feedback-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: true,
		margin: 30,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1200: {
				items: 2,
			}
		}
	});

	// Repair Partner Slides
	$('.repair-partner-slides').owlCarousel({
		loop: true,
		autoplay: true,
		nav: false,
		mouseDrag: true,
		autoplayHoverPause: true,
		responsiveClass: true,
		dots: false,
		margin: 30,
		navText: [
			"<i class='icofont-double-left'></i>",
			"<i class='icofont-double-right'></i>"
		],
		responsive: {
			0: {
				items: 2,
			},
			576: {
				items: 3,
			},
			768: {
				items: 4,
			},
			1200: {
				items: 6,
			}
		}
	});

	// WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            let wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
          });
          wow.init();
        }
	});
	
	// Go to Top
	$(function(){
		//Scroll event
		$(window).on('scroll', function(){
			let scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.go-top').fadeIn('slow');
			if (scrolled < 300) $('.go-top').fadeOut('slow');
		});  
		//Click event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));