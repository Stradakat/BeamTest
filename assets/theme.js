'use strict';

var navbar = document.getElementById('navbarMobile');
var closeMenu = document.getElementById('closeMenu');
var openMenu = document.getElementById('openMenu');

document.getElementById('openMenu').addEventListener('click', function () {
    navbar.classList.add('showme');
    this.style.display = "none";
    closeMenu.style.display = "inline-block";
});
document.getElementById('closeMenu').addEventListener('click', function () {
    navbar.classList.remove('showme');
    openMenu.style.display = "inline-block";
    this.style.display = "none";
});

var common = function ($) {
    'use strict';

    /**
     * Some function
     *
     * @since   1.0.0
     */

    var someFunction = function someFunction() {
        // do something
    };

    /**
     * Fire events on document ready and bind other events
     *
     * @since   1.0.0
     */
    var ready = function ready() {
        someFunction();
    };

    /**
     * Only expose the ready function to the world
     */
    return {
        ready: ready
    };
}(jQuery);

jQuery(common.ready);
'use strict';

/*============================*/
/* Update main product image. */
/*============================*/
var switchImage = function switchImage(newImageSrc, newImage, mainImageDomEl) {
    // newImageSrc is the path of the new image in the same size as originalImage is sized.
    // newImage is Shopify's object representation of the new image, with various attributes, such as scr, id, position.
    // mainImageDomEl is the passed domElement, which has not yet been manipulated. Let's manipulate it now.
    jQuery(mainImageDomEl).parents('a').attr('href', newImageSrc.replace('_grande', '_1024x1024'));
    jQuery(mainImageDomEl).attr('src', newImageSrc);
};

jQuery(function ($) {

    /* Placeholder JS */
    /*==========================*/
    var test = document.createElement('input');
    if (!('placeholder' in test)) {
        $('[placeholder]').each(function () {
            if ($(this).val() === '') {
                var hint = $(this).attr('placeholder');
                $(this).val(hint).addClass('hint');
            }
        });
        $('[placeholder]').focus(function () {
            if ($(this).val() === $(this).attr('placeholder')) {
                $(this).val('').removeClass('hint');
            }
        }).blur(function () {
            if ($(this).val() === '') {
                $(this).val($(this).attr('placeholder')).addClass('hint');
            }
        });
    }

    /* Form validation JS */
    /*==========================*/

    $('input.error, textarea.error').focus(function () {
        $(this).removeClass('error');
    });

    $('form :submit').click(function () {
        $(this).parents('form').find('input.hint, textarea.hint').each(function () {
            $(this).val('').removeClass('hint');
        });
        return true;
    });

    /* Remove SVG images to avoid broken images in all browsers that don't support SVG. */
    /*==========================*/

    var supportsSVG = function supportsSVG() {
        return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#Image', '1.1');
    };
    if (!supportsSVG()) {
        $('img[src*=".svg"]').remove();
    }

    /* Prepare to have floated images fill the width of the design on blog pages on small devices. */
    /*==========================*/

    var images = $('.article img').load(function () {
        var src = $(this).attr('src').replace(/_grande\.|_large\.|_medium\.|_small\./, '.');
        var width = $(this).width();
        $(this).attr('src', src).attr('width', width).removeAttr('height');
    });

    /* Update main product image when a thumbnail is clicked. */
    /*==========================*/
    $('.product-photo-thumb a').on('click', function (e) {
        e.preventDefault();
        switchImage($(this).attr('href'), null, $('.product-photo-container img')[0]);
    });
	
});