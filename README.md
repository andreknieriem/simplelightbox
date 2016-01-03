# simplelightbox
Touch-friendly image lightbox for mobile and desktop with jQuery

### Install
```sh
//Bower
bower install simplelightbox

//NPM
npm install simplelightbox
```

### Usage
Simple include simplelightbox.css and simple-lightbox.js to your page
```javascript
var lightbox = $('.gallery a').simpleLightbox(options);
```

###Options
| Property | Default | Type | Description |
| -------- | ------- | ---- | ----------- |
| overlay | true | bool | show an overlay or not |
| spinner | true | bool | show spinner or not |
| nav | true | bool | show arrow-navigation or not |
| navText | ['&larr;','&rarr;'] | array | text or html for the navigation arrows |
| captions | true | bool | show captions if availabled or not |
| captionDelay | 0 | int | adds a delay before the caption shows |
| captionSelector | 'img' | string | set the element where the caption is. Set it to "self" for the A-Tag itself |
| captionType | 'attr' | string | how to get the caption. You can choose between attr, data or text |
| captionsData | title | string | get the caption from given attribute |
| captionPosition | 'bottom' | string | the position of the caption. Options are top, bottom or outside (note that outside can be outside the visible viewport!) |
| close | true | bool | show the close button or not |
| closeText | '×' | string | text or html for the close button |
| showCounter | true | bool | show current image index or not |
| fileExt | 'png&#124;jpg&#124;jpeg&#124;gif' | regexp or false | list of fileextensions the plugin works with or false for disable the check | 
| animationSpeed | 250 | int | how long takes the slide animation |
| preloading | true | bool | allows preloading next und previous images |
| enableKeyboard | true | bool | allow keyboard arrow navigation and close with ESC key |
| loop | true | bool | enables looping through images |
| docClose | true | bool | closes the lightbox when clicking outside |
| swipeTolerance | 50 | int | how much pixel you have to swipe, until next or previous image |
| className: | 'simple-lightbox' | string | adds a class to the wrapper of the lightbox |
| widthRatio: | 0.8 | float | Ratio of image width to screen width |
| heightRatio: | 0.9 | float | Ratio of image height to screen height |
| disableRightClick | false | bool | disable rightclick on image or not |
| disableScroll | true | bool | stop scrolling page if lightbox is opened |

###Events
| Name | Description |
| ---- | ----------- |
| open.simplelightbox | this event fires before the lightbox opens |
| opened.simplelightbox | this event fires after the lightbox was opened |
| close.simplelightbox | this event fires before the lightbox closes |
| closed.simplelightbox | this event fires after the lightbox was closed |

**Example**
```javascript
$('.gallery a').on('open.simplelightbox', function () {
  // do something…
});
```

###Public Methods
| Name | Description |
| ---- | ----------- |
| open | Opens the lightbox with an given jQuery Element |
| close | Closes current openend Lightbox |
| next | Go to next image |
| prev | Go to previous image |
| destroy | Destroys the instance of  the lightbox |

**Example**
```javascript
var gallery = $('.gallery a').simpleLightbox();

gallery.next(); // Next Image
```

###Multiple Lightboxes on one page
You can have multiple lightboxes on one page, if you give them different selectors. Here is a small example:
```javascript
var lightbox1 = $('.lighbox-1 a').simpleLightbox();
var lightbox2 = $('.lighbox-2 a').simpleLightbox();
```

### Changelog
**1.6.0 - Option for caption position. Disable prev or next arrow if loop is false and position is first or last.**  
**1.5.1 - Bugfix for multiple lightboxes on one page**  
**1.5.0 - Added options for disabling rightclick and scrolling, changed default prev- and next-button text**  
**1.4.6 - Option for fileExt can now be false to enable pictures like example.com/pic/200/100**  
**1.4.5 - Bugfix lightbox opening does not work on mobile devices**  
**1.4.4 - Bugfix no drag&drop in FF, changed default close text, only output data if lightbox is opened**  
**1.4.3 - Bugfix z-index for spinner to low, added sass files**  
**1.4.2 - Bugfix for issue #2 - Drop Event does not fire when mouse leaves window**  
**1.4.1 - The whole caption Selector is rewritten. You can now select an element and get its text, use data or attribute**  
**1.4.0 - Caption Attribute can now be what, you want, or data-title. Fixed some small issues**  
**1.3.1 - Bugfix: disable keyboard control if lightbox is closed**  
**1.3.0 - Added current index indicator/counter**  
**1.2.0 - Added option for captions attribute (title or data-title)**  
**1.1.2 - Bugfix for looping images**  
**1.1.1 - Bugfix for loading indicator and removed a log-event**  
**1.1.0 - Added classname for lightbox wrapper and width/height ratio**  
**1.0.0 - Initial Release**