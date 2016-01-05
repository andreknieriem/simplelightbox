
/*
	By André Rinas, www.andreknieriem.de
	Available for use under the MIT License
*/

;( function( $, window, document, undefined )
{
	'use strict';

$.fn.simpleLightbox = function( options )
{

	var options = $.extend({
		overlay:			true,
		spinner:			true,
		nav:				true,
		navText:			['&lsaquo;','&rsaquo;'],
		captions:			true,
		captionDelay:		0,
		captionSelector:	'img',
		captionType:		'attr',
		captionsData:		'title',
		captionPosition:	'bottom',
		close:				true,
		closeText:			'×',
		showCounter:		true,
	 	fileExt:			'png|jpg|jpeg|gif',
	 	animationSlide:		true,
	 	animationSpeed:		250,
	 	preloading:			true,
	 	enableKeyboard:		true,
	 	loop:				true,
	 	docClose: 			true,
	 	swipeTolerance: 	50,
	 	className:			'simple-lightbox',
	 	widthRatio: 		0.8,
	 	heightRatio: 		0.9,
	 	disableRightClick:	false,
	 	disableScroll:		true
	 }, options );

	// global variables
	var touchDevice	= ( 'ontouchstart' in window ),
	    pointerEnabled = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	    touched = function( event ){
            if( touchDevice ) return true;

            if( !pointerEnabled || typeof event === 'undefined' || typeof event.pointerType === 'undefined' )
                return false;

            if( typeof event.MSPOINTER_TYPE_MOUSE !== 'undefined' )
            {
                if( event.MSPOINTER_TYPE_MOUSE != event.pointerType )
                    return true;
            }
            else
                if( event.pointerType != 'mouse' )
                    return true;

            return false;
        },
        swipeDiff = 0,
		curImg = $(),
	    transPrefix = function(){
	        var s = document.body || document.documentElement, s = s.style;
	        if( s.WebkitTransition == '' ) return '-webkit-';
	        if( s.MozTransition == '' ) return '-moz-';
	        if( s.OTransition == '' ) return '-o-';
	        if( s.transition == '' ) return '';
	        return false;
		},
		opened = false,

		objects = $( this.selector, this.context ),
		transPrefix = transPrefix(),
		canTransisions = (transPrefix !== false) ? true : false,
		prefix = 'simplelb',
		overlay = $('<div>').addClass('sl-overlay'),
		closeBtn = $('<button>').addClass('sl-close').html(options.closeText),
		spinner = $('<div>').addClass('sl-spinner').html('<div></div>'),
		nav = $('<div>').addClass('sl-navigation').html('<button class="sl-prev">'+options.navText[0]+'</button><button class="sl-next">'+options.navText[1]+'</button>'),
		counter = $('<div>').addClass('sl-counter').html('<span class="sl-current"></span>/<span class="sl-total"></span>'),
		animating = false,
		index = 0,
		image = $(),
		caption = $('<div>').addClass('sl-caption pos-'+options.captionPosition),
		wrapper = $('<div>').addClass('sl-wrapper').addClass(options.className).html('<div class="sl-image"></div>'),
		isValidLink = function( element ){
			if(!options.fileExt) return true;
			return $( element ).prop( 'tagName' ).toLowerCase() == 'a' && ( new RegExp( '\.(' + options.fileExt + ')$', 'i' ) ).test( $( element ).attr( 'href' ) );
		},
		setup = function(){
			image = $('.sl-image');
			console.log(objects);
	        if(options.close) closeBtn.appendTo(wrapper);
	        if(options.showCounter){
	        	if(objects.length > 1){
	        		counter.appendTo(wrapper);
	        		counter.find('.sl-total').text(objects.length);
	        	}

	        }
	        if(options.nav) nav.appendTo(wrapper);
	        if(options.spinner) spinner.appendTo(wrapper);
		},
		openImage = function(elem){
			elem.trigger($.Event('show.simplelightbox'));
			if(options.disableScroll) handleScrollbar('hide');
			wrapper.appendTo('body');
			if(options.overlay) overlay.appendTo($('body'));
			animating = true;
			index = objects.index(elem);
	        curImg = $( '<img/>' )
	        .hide()
	        .attr('src', elem.attr('href'));
	        $('.sl-image').html('');
        	curImg.appendTo($('.sl-image'));
        	overlay.fadeIn('fast');
        	$('.sl-close').fadeIn('fast');
        	spinner.show();
        	nav.fadeIn('fast');
        	$('.sl-wrapper .sl-counter .sl-current').text(index +1);
        	counter.fadeIn('fast');
        	adjustImage();
        	if(options.preloading) preload();
		    setTimeout( function(){ elem.trigger($.Event('shown.simplelightbox'));} ,options.animationSpeed);
		},
		adjustImage = function(dir){
			if(!curImg.length) return;
      	var tmpImage 	 = new Image(),
			windowWidth	 = $( window ).width() * options.widthRatio,
			windowHeight = $( window ).height() * options.heightRatio;
        	tmpImage.src	= curImg.attr( 'src' );

        	tmpImage.onload = function() {
				var imageWidth	 = tmpImage.width,
					imageHeight	 = tmpImage.height;

				if( imageWidth > windowWidth || imageHeight > windowHeight ){
					var ratio	 = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
					imageWidth	/= ratio;
					imageHeight	/= ratio;
				}

				$('.sl-image').css({
					'top':    ( $( window ).height() - imageHeight ) / 2 + 'px',
					'left':   ( $( window ).width() - imageWidth ) / 2 + 'px'
				});
				spinner.hide();
				curImg
				.css({
					'width':  imageWidth + 'px',
					'height': imageHeight + 'px'
				})
				.fadeIn('fast');
				opened = true;
				var cSel = (options.captionSelector == 'self') ? objects.eq(index) : objects.eq(index).find(options.captionSelector);
				if(options.captionType == 'data'){
					var captionText = cSel.data(options.captionsData);
				} else if(options.captionType == 'text'){
					var captionText = cSel.html();
				} else {
					var captionText = cSel.prop(options.captionsData);
				}

				if(!options.loop) {
					if(index == 0){ $('.sl-prev').hide();}
					if(index >= objects.length -1) {$('.sl-next').hide();}
					if(index > 0 && index < objects.length -1){ $('.sl-prev, .sl-next').show(); }
				}

				if(objects.length == 1) $('.sl-prev, .sl-next').hide();

				if(dir == 1 || dir == -1){
					var css = { 'opacity': 1.0 };
					if( options.animationSlide ) {
						if( canTransisions ) {
							slide(0, 100 * dir + 'px');
							setTimeout( function(){ slide( options.animationSpeed / 1000, 0 + 'px'), 50 });
						}
						else {
							css.left = parseInt( $('.sl-image').css( 'left' ) ) + 100 * dir + 'px';
						}
					}

					$('.sl-image').animate( css, options.animationSpeed, function(){
						animating = false;
						setCaption(captionText);
					});
				} else {
					animating = false;
					setCaption(captionText);
				}

			}
		},
		setCaption = function(captiontext){
			if(captiontext != '' && typeof captiontext !== "undefined" && options.captions){
				caption.html(captiontext).hide().appendTo($('.sl-image')).delay(options.captionDelay).fadeIn('fast');
			}
		},
		slide = function(speed, pos){
		var styles = {};
			styles[transPrefix + 'transform'] = 'translateX(' + pos + ')';
			styles[transPrefix + 'transition'] = transPrefix + 'transform ' + speed + 's linear';
			$('.sl-image').css(styles);
		},
		preload = function(){
			var next = (index+1 < 0) ? objects.length -1: (index+1 >= objects.length -1) ? 0 : index+1,
				prev = (index-1 < 0) ? objects.length -1: (index-1 >= objects.length -1) ? 0 : index-1;
			$( '<img />' ).attr( 'src', objects.eq(next).attr( 'href' ) ).load();
			$( '<img />' ).attr( 'src', objects.eq(prev).attr( 'href' ) ).load();

		},
		loadImage = function(dir){
		    spinner.show();
		var newIndex = index + dir;
			if(animating || (newIndex < 0 || newIndex >= objects.length) && options.loop == false ) return;
			index = (newIndex < 0) ? objects.length -1: (newIndex > objects.length -1) ? 0 : newIndex;
			$('.sl-wrapper .sl-counter .sl-current').text(index +1);
      	var css = { 'opacity': 0 };
			if( options.animationSlide ) {
			  if( canTransisions ) slide(options.animationSpeed / 1000, ( -100 * dir ) - swipeDiff + 'px');
			  else css.left = parseInt( $('.sl-image').css( 'left' ) ) + -100 * dir + 'px';
			}
			$('.sl-image').animate( css, options.animationSpeed, function(){
				setTimeout( function(){
					// fadeout old image
					var elem = objects.eq(index);
					curImg
					.attr('src', elem.attr('href'));
					$('.sl-caption').remove();
					adjustImage(dir);
					if(options.preloading) preload();
				}, 100);
			});
		},
		close = function(){
			if(animating) return;
			var elem = objects.eq(index),
				triggered = false;
			elem.trigger($.Event('close.simplelightbox'));
		    $('.sl-image img, .sl-overlay, .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter').fadeOut('fast', function(){
		    	if(options.disableScroll) handleScrollbar('show');
		    	$('.sl-wrapper, .sl-overlay').remove();
		    	if(!triggered) elem.trigger($.Event('closed.simplelightbox'));
		    	triggered = true;
		    });
		    curImg = $();
		    opened = false;
		    animating = false;
		},
		handleScrollbar = function(type){
			if(type == 'hide'){
				var fullWindowWidth = window.innerWidth;
				if (!fullWindowWidth) {
			      var documentElementRect = document.documentElement.getBoundingClientRect()
			      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
			    }
				if(document.body.clientWidth < fullWindowWidth){
					var scrollDiv = document.createElement('div'),
						padding = parseInt($('body').css('padding-right'),10);
				    scrollDiv.className = 'sl-scrollbar-measure';
				    $('body').append(scrollDiv);
				    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				    $(document.body)[0].removeChild(scrollDiv);
				    $('body').data('padding',padding);
				    if(scrollbarWidth > 0){
				    	$('body').css({'padding-right':padding+scrollbarWidth, 'overflow':'hidden'});
				    }
				}
			} else {
				$('body').css({'padding-right':$('body').data('padding'), 'overflow':'auto'});
			}
		}

	// events
	setup();

	// resize/responsive
	$( window ).on( 'resize', adjustImage );

	// open lightbox
	objects.on( 'click.'+prefix, function( e ){
	  	if(isValidLink(this)){
	    	e.preventDefault();
	    	if(animating) return false;
	    	openImage($(this));
	  	}
	});

	// close lightbox on close btn
	$( document ).on('click', '.sl-close', function(e){
		e.preventDefault();
		if(opened){ close();}
	});

	// close on click on doc
	$( document ).click(function(e){
		if(opened){
			if((options.docClose && $(e.target).closest('.sl-image').length == 0 && $(e.target).closest('.sl-navigation').length == 0)){
				close();
			}
		}
	});

	// disable rightclick
	if(options.disableRightClick){
		$( document ).on('contextmenu', '.sl-image img', function(e){
			return false;
		});
	}

	// nav-buttons
	$(document).on('click', '.sl-navigation button', function(e){
		e.preventDefault();
		swipeDiff = 0;
		loadImage( $(this).hasClass('sl-next') ? 1 : -1 );
	});

	// keyboard-control
	if( options.enableKeyboard ){
		$( document ).on( 'keyup.'+prefix, function( e ){
			e.preventDefault();
			swipeDiff = 0;
			// keyboard control only if lightbox is open
			if(opened){
				var key = e.keyCode;
				if( key == 27 ) {
					close();
				}
				if( key == 37 || e.keyCode == 39 ) {
					loadImage( e.keyCode == 39 ? 1 : -1 );
				}
			}
		});
	}

	// touchcontrols
	var swipeStart	 = 0,
		swipeEnd	 = 0,
		mousedown = false,
		imageLeft = 0;

	$( document )
	.on( 'touchstart mousedown pointerdown MSPointerDown', '.sl-image', function(e)
	{
	    if(mousedown) return true;
		if( canTransisions ) imageLeft = parseInt( image.css( 'left' ) );
		mousedown = true;
		swipeStart = e.originalEvent.pageX || e.originalEvent.touches[ 0 ].pageX;
		return false;
	})
	.on( 'touchmove mousemove pointermove MSPointerMove', function(e)
	{
		if(!mousedown) return true;
		e.preventDefault();
		swipeEnd = e.originalEvent.pageX || e.originalEvent.touches[ 0 ].pageX;
		swipeDiff = swipeStart - swipeEnd;
		if( options.animationSlide ) {
		  if( canTransisions ) slide( 0, -swipeDiff + 'px' );
		  else image.css( 'left', imageLeft - swipeDiff + 'px' );
		}
	})
	.on( 'touchend mouseup touchcancel pointerup pointercancel MSPointerUp MSPointerCancel',function(e)
	{
		if(mousedown){
			mousedown = false;
			if( Math.abs( swipeDiff ) > options.swipeTolerance ) {
				loadImage( swipeDiff > 0 ? 1 : -1 );
			}
			else if( options.animationSlide )
			{
				if( canTransisions ) slide( options.animationSpeed / 1000, 0 + 'px' );
				else image.animate({ 'left': imageLeft + 'px' }, options.animationSpeed / 2 );
			}
		}
	});

	// Public methods
	this.open = function(elem){
		openImage(elem);
	}

	this.next = function(){
		loadImage( 1 );
	}

	this.prev = function(){
		loadImage( -1 );
	}

	this.close = function(){
		close();
	}

	this.destroy = function(){
		$( document ).unbind('click.'+prefix).unbind('keyup.'+prefix);
		close();
		$('.sl-overlay, .sl-wrapper').remove();
	}

	return this;

};
})( jQuery, window, document );