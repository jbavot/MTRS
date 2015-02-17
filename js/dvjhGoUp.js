/**
 * Created by Jean-Baptiste AVOT on 14/04/14.
 */
/*
 * Daniel Hagnoul
 *
 * Plugin jquery.dvjhGoUp-1.0.0.js
 *
 * Code : v1.0.0 2010-04-05
 *
 * Usage : $.dvjhGoUp();
 * ---------------------------------------------------
 * Options disponibles, rÃ©glages par dÃ©faut :
 * 	bottom: "6px", // position fixed bottomRight
 * 	right: "6px", // position fixed bottomRight
 * 	imgId: "dvjhGoUp",
 * 	imgSrc: "img/toparrow.png",
 * 	imgAlt: "Monter. Go up.",
 * 	imgTitle: "Monter. Go up.",
 * 	imgWidth: "50px",
 * 	imgHeight: "48px",
 * 	imgBorder: "none",
 * 	imgCursor: "pointer",
 * 	imgFadeInDelay: 800, // 0.8s
 * 	imgFadeOutDelay: 800, // 0.8s
 * 	scrollImg: 300, // distance de scroll, en px, avant l'apparition ou la disparition de l'image
 * 	scrollDelay: 2000 // durÃ©e de l'animation 2s
 * ---------------------------------------------------
 * Les lecteurs des fondations reconnaitront une fonction
 * globale dans l'espace de nom jQuery.
 */
(function($){
    $.dvjhGoUp = function(options){
        var opts = $.extend(true, {}, $.dvjhGoUp.defaults, options);

        $("<img/>", {
            id:opts.imgId,
            src:opts.imgSrc,
            css:{
                display:"none",
                position:"fixed",
                bottom:opts.bottom,
                right:opts.right,
                width:opts.imgWidth,
                height:opts.imgHeight,
                border:opts.imgBorder,
                cursor:opts.imgCursor
            },
            alt:opts.imgAlt,
            title:opts.imgTitle,
            click:function(){
                $("html, body").animate({scrollTop: "0px"}, opts.scrollDelay);
                return false;
            }
        }).appendTo("body");

        $(window).bind("scroll", function() {
            var obj = $("#"+opts.imgId);

            if ($(this).scrollTop() > opts.scrollImg){
                obj.fadeIn(opts.imgFadeInDelay);
            } else {
                obj.fadeOut(opts.imgFadeOutDelay);
            }
        });
    };

    $.dvjhGoUp.defaults = {
        bottom: "6px", // position fixed bottomRight
        right: "6px", // position fixed bottomRight
        imgId: "dvjhGoUp",
        imgSrc: "img/toparrow.png",
        imgAlt: "Monter. Go up.",
        imgTitle: "Monter. Go up.",
        imgWidth: "50px",
        imgHeight: "48px",
        imgBorder: "none",
        imgCursor: "pointer",
        imgFadeInDelay: 800, // 0.8s
        imgFadeOutDelay: 800, // 0.8s
        scrollImg: 300, // distance de scroll, en px, avant l'apparition ou la disparition de l'image
        scrollDelay: 2000 // durÃ©e de l'animation 2s
    };
})(jQuery);