/*global $, jQuery*/
// -----------------------------
// Preloader
// -----------------------------
$(window).load(function () {
	"use strict";
    $('.preloader').fadeOut(1200);
});

// -----------------------------
// Navbar fade
// -----------------------------
$(function () {
	"use strict";
    var navbar = $('.navbar');
    if (navbar.hasClass("is-transparent")) {
        $(window).scroll(function () {
            if (navbar.offset().top > 250) {
                navbar.removeClass("is-transparent");
            } else {
                navbar.addClass("is-transparent");
            }
        });
    } else {
        return;
    }
});

// -----------------------------
// Header > .btn-duo equal width
// -----------------------------
$(function () {
	"use strict";
	function btnDuo() {
		$(".btn-duo").each(function () {
			var btnFirst = $(this).find(".btn:first-child"),
				btnLast = $(this).find(".btn:last-child"),
				btnFirstWidth = btnFirst.outerWidth(),
				btnLastWidth = btnLast.outerWidth();
			if (btnFirstWidth < btnLastWidth) {
				$(btnFirst).css("width", btnLastWidth + "px");
			} else {
				$(btnLast).css("width", btnFirstWidth + "px");
			}
		});
	}
	btnDuo();
});

// -----------------------------
// Overlay Menu
// -----------------------------
$(document).ready(function () {
    "use strict";
    var menuWrapper = $('.menu-wrapper'),
		overlayMenu = $('.overlay-menu'),
		burgerMenu = $('.burger-menu'),
        burgerItems = $('.navbar-brand, .burger-menu');
    $(document).on('click', '.burger-menu, .menu-wrapper.is-visible', function (event) {
        if (menuWrapper.hasClass("is-visible")) {
            setTimeout(function () {
                overlayMenu.removeClass('menu-visible').css("opacity", "0").attr("aria-expanded", "false");
                burgerMenu.removeClass('icon-cross').addClass('icon-menu');
                burgerItems.css("color", "inherit");
                setTimeout(function () {
                    menuWrapper.removeClass('is-visible').css("display", "none");
                }, 1200);
            }, 600);
        } else {
            event.preventDefault();
            burgerMenu.removeClass('icon-menu').addClass('icon-cross');
            burgerItems.css("color", "#4a4c4d");
            setTimeout(function () {
                menuWrapper.addClass('is-visible').css("display", "block");
                setTimeout(function () {
                    overlayMenu.addClass('menu-visible').css("opacity", "1").attr("aria-expanded", "true");
                }, 300);
            }, 200);
        }
    });
});

// -----------------------------
// Slick
// -----------------------------
$(document).ready(function () {
	"use strict";
    // Clients Logos
    $('.slider.clients-logo').slick({
        slide: 'ul>li',
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 5,
        arrows: false,
        responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3
				}
			}
		]
	});
    // Customers Quotes
    $('.slider.quotes').slick({
        slide: 'ul>li',
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        dotsClass: 'avatar-dots',
        customPaging: function (slider, i) {
            return '<a class="tab">' + $(slider.$slides[i]).find('.dot-trigger').html() + '</a>';
        }
    });
});

// -----------------------------
// Counters
// -----------------------------
$('.number').appear(function () {
	"use strict";
    $('.number').countTo();
});


// -----------------------------
// Section Title automatic alignment
// -----------------------------
$(".section-title").each(function () {
	"use strict";
    if ($(this).css('text-align') === 'center') {
        $(this).addClass("centered");
    } else if ($(this).css('text-align') === 'right') {
        $(this).addClass("right");
    } else {
        return;
    }
});

// -----------------------------
// Parallax
// ----------------------------
$('#scene').parallax({
    invertX: false,
    invertY: false
});

// -----------------------------
// Magnific Popup
// ----------------------------
$(document).ready(function () {
    "use strict";
    // Video
    $(".watch-video").magnificPopup({
        type: "iframe"
    });
    // Gallery Screens
    $('#gallery').on('click', function () {
        $(this).next().magnificPopup('open');
    });
    $('.gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            gallery: {
                enabled: true,
                arrowMarkup: '<button title="%title%" type="button" class="icon icon-chevron-thin-%dir%"></button>'
            },
            type: 'image',
            fixedContentPos: false
        });
    });
});

// ----------------------------
// Progressbar
// ----------------------------
$('.progress-wrap').each(function () {
	"use strict";
    $('.progress').appear(function (s) {
        var value = $(this).find('.progress-bar').attr('aria-valuenow'),
			percent = parseInt(value, 10);
        $(this).find('.progress-bar').animate({
            'width': value + '%'
        }, 100, function () {
            $(this).find('.bar-value').countTo({
                from: 0,
                to: percent,
                speed: 1200,
                refreshInterval: 5
            }).fadeTo(3300, 1);
        });
    });
});

// ----------------------------
// Layout with slider background
// Hero bg images
// ----------------------------
$(document).ready(function () {
    "use strict";
    if ($("body").hasClass("slider-bg")) {
        $(".hero").vegas({
            animation: "kenburns",
			overlay: "img/overlays/08.png",
            delay: 5000,		
            color: "#EA592D",
            slides: [
				{ src: "img/1.jpg" },
				{ src: "img/2.jpg" },
				{ src: "img/3.jpg" },
				{ src: "img/4.jpg" },
				{ src: "img/5.jpg" }
			]
        });
        $(".vegas-wrapper").addClass("flex flex-middle");
        $(window).resize(function () {
            var wHeight = $(window).height();
            $(".hero").css("height", wHeight);
        });
    }
});

// ----------------------------
// Layout with video background
// Hero bg video
// ----------------------------
$(function () {
    "use strict";
    if ($("body").hasClass("video-bg")) {
		var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
		if (isMobile === false) {
			$(".player").mb_YTPlayer();
		} else {
			/* displays a background image if mobile device is detected*/
			$('body').removeClass('video-bg');
		}
	}
});
//  -----------------------------------
//  Header Animation
//
//  -----------------------------------
jQuery(document).ready(function($){
	//set animation timing
	var animationDelay = 2500,
		//loading bar effect
		barAnimationDelay = 3800,
		barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
		//letters effect
		lettersDelay = 50,
		//type effect
		typeLettersDelay = 150,
		selectionDuration = 500,
		typeAnimationDelay = selectionDuration + 800,
		//clip effect
		revealDuration = 600,
		revealAnimationDelay = 1500;

	initHeadline();


	function initHeadline() {
		//insert <i> element for each letter of a changing word
		singleLetters($('.cd-headline.letters').find('b'));
		//initialise headline animation
		animateHeadline($('.cd-headline'));
	}

	function singleLetters($words) {
		$words.each(function(){
			var word = $(this),
				letters = word.text().split(''),
				selected = word.hasClass('is-visible');
			for (i in letters) {
				if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
				letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
			}
		    var newLetters = letters.join('');
		    word.html(newLetters).css('opacity', 1);
		});
	}

	function animateHeadline($headlines) {
		var duration = animationDelay;
		$headlines.each(function(){
			var headline = $(this);

			if(headline.hasClass('loading-bar')) {
				duration = barAnimationDelay;
				setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
			} else if (headline.hasClass('clip')){
				var spanWrapper = headline.find('.cd-words-wrapper'),
					newWidth = spanWrapper.width() + 10
				spanWrapper.css('width', newWidth);
			} else if (!headline.hasClass('type') ) {
				//assign to .cd-words-wrapper the width of its longest word
				var words = headline.find('.cd-words-wrapper b'),
					width = 0;
				words.each(function(){
					var wordWidth = $(this).width();
				    if (wordWidth > width) width = wordWidth;
				});
				headline.find('.cd-words-wrapper').css('width', width);
			};

			//trigger animation
			setTimeout(function(){ hideWord( headline.find('.is-visible').eq(0) ) }, duration);
		});
	}

	function hideWord($word) {
		var nextWord = takeNext($word);

		if($word.parents('.cd-headline').hasClass('type')) {
			var parentSpan = $word.parent('.cd-words-wrapper');
			parentSpan.addClass('selected').removeClass('waiting');
			setTimeout(function(){
				parentSpan.removeClass('selected');
				$word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
			}, selectionDuration);
			setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

		} else if($word.parents('.cd-headline').hasClass('letters')) {
			var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
			hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
			showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
				switchWord($word, nextWord);
				showWord(nextWord);
			});

		} else if ($word.parents('.cd-headline').hasClass('loading-bar')){
			$word.parents('.cd-words-wrapper').removeClass('is-loading');
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
			setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

		} else {
			switchWord($word, nextWord);
			setTimeout(function(){ hideWord(nextWord) }, animationDelay);
		}
	}

	function showWord($word, $duration) {
		if($word.parents('.cd-headline').hasClass('type')) {
			showLetter($word.find('i').eq(0), $word, false, $duration);
			$word.addClass('is-visible').removeClass('is-hidden');

		}  else if($word.parents('.cd-headline').hasClass('clip')) {
			$word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
				setTimeout(function(){ hideWord($word) }, revealAnimationDelay);
			});
		}
	}

	function hideLetter($letter, $word, $bool, $duration) {
		$letter.removeClass('in').addClass('out');

		if(!$letter.is(':last-child')) {
		 	setTimeout(function(){ hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else if($bool) {
		 	setTimeout(function(){ hideWord(takeNext($word)) }, animationDelay);
		}

		if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
			var nextWord = takeNext($word);
			switchWord($word, nextWord);
		}
	}

	function showLetter($letter, $word, $bool, $duration) {
		$letter.addClass('in').removeClass('out');

		if(!$letter.is(':last-child')) {
			setTimeout(function(){ showLetter($letter.next(), $word, $bool, $duration); }, $duration);
		} else {
			if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
			if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
		}
	}

	function takeNext($word) {
		return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
	}

	function takePrev($word) {
		return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
	}

	function switchWord($oldWord, $newWord) {
		$oldWord.removeClass('is-visible').addClass('is-hidden');
		$newWord.removeClass('is-hidden').addClass('is-visible');
	}
});
//  ------------------------------------------------------------------
//                          Smooth Scroll
//  ------------------------------------------------------------------


    $(document).ready(function(){
		"use strict";
      $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top -30;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });
    });
//  -------------------------------------------------------------------
//                          Alt Smooth Scroll
//  -------------------------------------------------------------------
/*  

$(function() {
  // This will select everything with the class "smoothScroll"
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference

*/
//  --------------------------------------------------------------------
//                            SVG animation
//  --------------------------------------------------------------------
/*var container = document.querySelector('.container');
var triangle = document.querySelector('.triangle');

TweenMax.set(container, {
  position:'absolute',
  top:'50%',
  left:'50%',
  xPercent:-50,
  yPercent:-50
})
TweenMax.set(triangle, {
  scale:0.95
})

var tl = new TimelineMax({repeat:-1, repeatDelay:1});
tl.timeScale(6);
tl.to(triangle, 3, {
  rotation:'-=120',
  svgOrigin:'300 325',
  ease:Power2.easeInOut
})

.staggerFrom('#bottom path', 2, {
  drawSVG:"100% 100%",
  ease:Power4.easeInOut,
  alpha:0
}, 0.2, '-=2.5')

.staggerFrom( '#right path', 2, {
  drawSVG:"100% 100%",
  ease:Power4.easeInOut,
  alpha:0
}, 0.2, '-=2.5')

.staggerFrom( '#left path', 2, {
  drawSVG:"100% 100%",
  ease:Power4.easeInOut,
  alpha:0
}, 0.2, '-=2.5')


.to(['#bottom path', '#right path', '#left path'], 2, {
  drawSVG:"0% 0%",
  ease:Power1.easeOut
},  '-=1.5')
*/