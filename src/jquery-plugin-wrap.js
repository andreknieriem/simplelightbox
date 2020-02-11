(function ($, window, document, undefined) {
    'use strict';
    $.fn.simpleLightbox = function (options) {
        return new SimpleLightbox(this.get(), options);
    }
})(jQuery, window, document);
