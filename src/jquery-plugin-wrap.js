require('./simple-lightbox');

(function ($, window, document, undefined) {
    'use strict';
    $.fn.simpleLightbox = function (options) {
        return this.length ? new SimpleLightbox(this.get(), options) : null;
    }
})(jQuery, window, document);
