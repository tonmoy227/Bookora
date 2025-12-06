/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";
	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .8, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);


	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	jQuery(window).on('scroll', function() {
		if (jQuery(window).scrollTop() > 250) {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').addClass('sticky-on')
		} else {
			jQuery('.ag-header-section.header_style_three, .ag-header-section.header_style_four').removeClass('sticky-on')
		}
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	$('.marquee-left').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 28,
		speed: 40,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});


	gsap.registerPlugin(ScrollTrigger);
	
	// Animation
	if($('.wow').length){
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		}
		);
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});

	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){

			CustomEase.create("ease1", ".645,.045,.355,1");

			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				
			}, 700);
		})		
	});
	

	if ($('.bk-service-slider').length > 0 ) {
		var slider = new Swiper('.bk-service-slider', {
			slidesPerView: 3,
			loop: true,
			spaceBetween: 24,
			speed: 1000,
			navigation: {
				nextEl: ".lg-ser-next",
				prevEl: ".lg-ser-prev",
			},
			pagination: {
				el: ".lg-ser-pagi",
				type: 'fraction',
				formatFractionCurrent: function (number) {
					return number < 10 ? '0'+ number: number;
				},
				formatFractionTotal: function (number) {
					return number < 10 ? '0'+ number : number;
				}
			},
			scrollbar: {
				el: '.lg-ser-scrollbar',
				draggable: false,
			},
			breakpoints: {
				'1600': {
					slidesPerView: 3,
				},
				'1200': {
					slidesPerView: 3,
				},
				'991': {
					slidesPerView: 2,
				},
				'768': {
					slidesPerView: 2,
				},
				'576': {
					slidesPerView: 1,
				},
				'0': {
					slidesPerView: 1,
				},
			},
		});
	};

	
	if (window.matchMedia("(min-width: 1200px)").matches) {
		var collab = gsap.timeline({
			scrollTrigger: {
				trigger: ".bk-testimonial-sec",
				start: "top 20%",
				toggleActions: "play reverse play reverse",
				markers: false,
			},
		})
		collab
		.from(".bk-testi-item", {
			yPercent: 100,
			opacity: 0,
			ease: "elastic.out(1,0.8)",
			duration: 2,
			stagger: .3,
		})
	}

	if (window.matchMedia("(min-width: 1200px)").matches) {
		let areas = Array.from(document.querySelectorAll(".bk-testi-area"));
		let itemsToAnimate = areas.slice(1).reverse();
		var BKTesti = gsap.timeline({
			scrollTrigger: {
				trigger: '.bk-testimonial-sec',
				start: "top 0%",
				end: "bottom 30%",
				scrub: 1.5,
				pin: true,
				pinSpacing: true,
				markers: false
			}
		});
		itemsToAnimate.forEach(item => {
			BKTesti.to(item, {
				yPercent: -100,
				opacity: 0,
				ease: "power1.out"
			});
		});

	}

})(jQuery);