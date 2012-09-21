$(function() {

	// layouts
	$('body').append('\
        <div class="layout" data-name="chapter-transition">\
            <div class="content-chapter-transition">\
				<content></content>\
            </div>\
            <div class="footer footer-chapter-transition">\
				<img src="../../slippy-exo-common/images/exo-logo.png"/>\
            </div>\
        </div>\
        <div class="layout" data-name="default">\
            <content></content>\
            <div class="footer footer-default">\
				<img src="../../slippy-exo-common/images/exo-logo-footer.png" class="exo-logo-footer"/>\
				<div class="copyright">www.exoplatform.com - Copyright 2012 eXo Platform</span>\
            </div>\
        </div>\
	');

	// Slippy init
    $(".slide").slippy({
        // settings go here
        // possible values are:
        //  - animLen, duration for default animations (0 = disabled)
        //  - animInForward, receives a slide and animates it
        //  - animInRewind, receives a slide and animates it
        //  - animOutForward, receives a slide and animates it
        //  - animOutRewind, receives a slide and animates it
        //  - baseWidth, defines the base for img resizing, if you don't want only
        //    full-width images, specify this as the pixel width of a slide so that
        //    images are scaled properly (default is 620px wide)
        //  - ratio, defines the width/height ratio of the slides, defaults to 1.3 (620x476)
        //  - margin, the fraction of screen to use as slide margin, defaults to 0.15
        animInForward: function(slide) {
			$(slide).css('left', '50%').css('opacity', '0').animate({opacity: '1'}, 350);
		},
		animOutForward: function(slide) {
			$(slide).animate({opacity: '0'}, 350);
		},
		animInRewind: function(slide) {
			$(slide).css('left', '50%').css('opacity', '0').animate({opacity: '1'}, 350);
		},
		animOutRewind: function(slide) {
			$(slide).animate({opacity: '0'}, 350);
		},
        ratio: 1.5,
        margin: 0.03
    });
    SyntaxHighlighter.all();
});
