# simplelightbox
Touch-friendly image lightbox for mobile and desktop with jQuery

### Features
* responsive
* touchfriendly
* swipe gestures for next/previous image
* easy to install, easy to use
* minimalistic
* Only some css is included. You can change the style like you want!
* lots of options
* preloading next and previous image
* Android, iOs and Windows phone support
* CSS3 Transitions with fallback for older browsers
* Works in every modern Browser, even in IE 9+
* Can use jQuery 1.x,2.x and 3.x
* Keyboard support
* Pinch to zoom
* Double-tap to zoom

### Install
```sh
// YARN
yarn add simplelightbox

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

### JavaScript Options
| Property | Default | Type | Description |
| -------- | ------- | ---- | ----------- |
| sourceAttr | href | string | the attribute used for large images |
| overlay | true | bool | show an overlay or not |
| spinner | true | bool | show spinner or not |
| nav | true | bool | show arrow-navigation or not |
| navText | ['&larr;','&rarr;'] | array | text or html for the navigation arrows |
| captions | true | bool | show captions if availabled or not |
| captionSelector | 'img' | string | set the element where the caption is. Set it to "self" for the A-Tag itself |
| captionType | 'attr' | string | how to get the caption. You can choose between attr, data or text |
| captionsData | title | string | get the caption from given attribute |
| captionPosition | 'bottom' | string | the position of the caption. Options are top, bottom or outside (note that outside can be outside the visible viewport!) |
| captionDelay | 0 | int | adds a delay before the caption shows (in ms) |
| captionClass | '' | string | add an additional class to the sl-caption |
| close | true | bool | show the close button or not |
| closeText | '×' | string | text or html for the close button |
| swipeClose | true | bool | swipe up or down to close gallery |
| showCounter | true | bool | show current image index or not |
| fileExt | 'png&#124;jpg&#124;jpeg&#124;gif' | regexp or false | list of fileextensions the plugin works with or false for disable the check |
| animationSpeed | 250 | int | how long takes the slide animation |
| animationSlide | true | bool | weather to slide in new photos or not, disable to fade |
| preloading | true | bool | allows preloading next und previous images |
| enableKeyboard | true | bool | allow keyboard arrow navigation and close with ESC key |
| loop | true | bool | enables looping through images |
| rel | false | mixed | group images by rel attribute of link with same selector.
| docClose | true | bool | closes the lightbox when clicking outside |
| swipeTolerance | 50 | int | how much pixel you have to swipe, until next or previous image |
| className: | 'simple-lightbox' | string | adds a class to the wrapper of the lightbox |
| widthRatio: | 0.8 | float | Ratio of image width to screen width |
| heightRatio: | 0.9 | float | Ratio of image height to screen height |
| scaleImageToRatio: | false | bool | scales the image up to the defined ratio size |
| disableRightClick | false | bool | disable rightclick on image or not |
| disableScroll | true | bool | stop scrolling page if lightbox is opened |
| alertError | true | bool | show an alert, if image was not found. If false error will be ignored |
| alertErrorMessage | 'Image not found, next image will be loaded' | string | the message displayed if image was not found |
| additionalHtml | false | string | Additional HTML showing inside every image. Usefull for watermark etc. If false nothing is added |
| history | true | bool | enable history back closes lightbox instead of reloading the page |
| throttleInterval | 0 | int | time to wait between slides |
| doubleTapZoom | 2 | int | zoom level if double tapping on image |
| maxZoom | 10 | int | maximum zoom level on pinching |
| htmlClass | 'has-lightbox' | string or false | adds class to html element if lightbox is open. If empty or false no class is set |
### Events
| Name | Description |
| ---- | ----------- |
| show.simplelightbox | this event fires before the lightbox opens |
| shown.simplelightbox | this event fires after the lightbox was opened |
| close.simplelightbox | this event fires before the lightbox closes |
| closed.simplelightbox | this event fires after the lightbox was closed |
| change.simplelightbox | this event fires before image changes |
| changed.simplelightbox | this event fires after image was changed |
| next.simplelightbox | this event fires before next image arrives |
| nextDone.simplelightbox | this event fires after next image was arrived |
| prev.simplelightbox | this event fires before previous image arrives |
| prevDone.simplelightbox | this event fires after previous image was arrived |
| nextImageLoaded.simplelightbox | this event fires after next image was loaded (if preload activated) |
| prevImageLoaded.simplelightbox | this event fires after previous image was loaded (if preload activated) |
| error.simplelightbox | this event fires on image load error |

**Example**  
```javascript
$('.gallery a').on('open.simplelightbox', function () {
  // do something…
});

$('.gallery a').on('error.simplelightbox', function (e) {
  console.log(e); // some usefull information
});
```

### Public Methods
| Name | Description |
| ---- | ----------- |
| open | Opens the lightbox with an given jQuery Element |
| close | Closes current openend Lightbox |
| next | Go to next image |
| prev | Go to previous image |
| destroy | Destroys the instance of  the lightbox |
| refresh | Destroys and reinitilized the lightbox, needed for eg. Ajax Calls, or after dom manipulations |

**Example**  
```javascript
var gallery = $('.gallery a').simpleLightbox();

gallery.next(); // Next Image
```

### Multiple Lightboxes on one page
You can have multiple lightboxes on one page, if you give them different selectors. Here is a small example:
```javascript
var lightbox1 = $('.lighbox-1 a').simpleLightbox();
var lightbox2 = $('.lighbox-2 a').simpleLightbox();
```

### Customization

You can customize Simplelightbox by changing the style in simplelightbox.css.

If you are using SASS, you can customize Simplelightbox with the following variables

```SASS
$sl-font-family: Arial, Baskerville, monospace;
$sl-overlay-background: #fff;
$sl-navigation-color: #000;
$sl-caption-color: #fff;
$sl-caption-background: #000;
$sl-overlay-opacity: 0.7;

$sl-counter-fontsize: 1rem;
$sl-caption-fontsize: 1rem;
$sl-close-fontsize: 3rem;

$sl-breakpoint-medium: 35.5em; // 568px, when 1rem == 16px
$sl-breakpoint-large:  50em;   // 800px, when 1rem == 16px

$sl-arrow-fontsize-small:  2rem;
$sl-arrow-fontsize-medium: 3rem;
$sl-arrow-fontsize-large:  3rem;
$sl-img-border-small:  0 none;
$sl-img-border-medium: 0 none;
$sl-img-border-large:  0 none;
$sl-iframe-border-small:  0 none;
$sl-iframe-border-medium: 0 none;
$sl-iframe-border-large:  0 none;

$add-vendor-prefixes: true !default;
```


### Changelog
**1.17.2 - Fixed caption keeps disappeared on double click #139 and added better close symbol #133**  
**1.17.1 - Added webp in fileExt list #135, removed hardcoded a-tag in isValidLink function #134**  
**1.17.0 - Merged pull request #132. Added double click to zoom for desktop browsers - Thanks to coderkan**  
**1.16.3 - Merged pull request #126,#127 - Thanks to jieter**  
**1.16.2 - Added featured #124 - Add a class to html element if lightbox is open**  
**1.16.1 - Fixed pinch to zoom offset error on scrolling #123**  
**1.16.0 - Pinch to Zoom feature for touch devices with new options doubleTapZoom and maxZoom #79**  
**1.15.1 - Merged pull request #113,#114,#115 - Thanks to RaphaelHaettich and celsius-jochen**  
**1.15.0 - Merged pull request #111, fixed #101 and added possibility to close lightbox on load #74**  
**1.14.0 - Merged pull request #107 and #108. Thanks to RaphaelHaettich**  
**1.13.0 - Added featured #92 and merged pull request #98 and #99. Thanks to RaphaelHaettich**  
**1.12.2 - Bugfix for #89**  
**1.12.1 - Bugfix for #88,#87 and remove bind/unbind #84**  
**1.12.0 - New option captionClass #81, bugfix for #82**  
**1.11.1 - Merged pull request #76. Thanks to walterebert, added support for images with parameters and file extension check #59**  
**1.11.0 - New option for src of image. e.g data attribute #70**  
**1.10.7 - Added Bootstrap compatibility #69**  
**1.10.6 - Merged pull requests #65. Thanks to mstaniuk**  
**1.10.5 - Merged pull requests #60 and #61. Thanks to slavanga**  
**1.10.4 - Bugfix von #58**  
**1.10.3 - Merged pull requests #55, #56 and #57. Thanks to karland**  
**1.10.2 - Aligned navigation and close buttons #51, fixed image error bug #52**  
**1.10.1 - Added support for jQuery 3.x #50**  
**1.10.0 - Implemented feature-request #48, history back, some bugfixing and code styling**  
**1.9.0 - Implemented feature-request #16, added rel option for grouping images**  
**1.8.6 - Implemented feature-request #46, added refresh method**  
**1.8.5 - Implemented feature-request #44**  
**1.8.4 - Bugfix for #41 and added option for additional html inside images #40**  
**1.8.3 - Bugfix for #38 and small other fix for loop false option**  
**1.8.2 - Better bugfix for #33, finally fixing multiple lightbox on one page slowness issues!**  
**1.8.1 - Bugfix for #31, #32 and #33**  
**1.8.0 - New API Events (changed open to show) and little fix in function open() brought by Geoffrey Crofte and some other small bugfixes**  
**1.7.2 - Bugfix von #25 and #27**  
**1.7.1 - Bugfix von #22 with new option alertError and merged pull request #23**  
**1.7.0 - Add support for fading between photos, Bugfix for single image navigation, option for caption delay**  
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

### Author
[Andre Rinas](https://www.andrerinas.de/) - [Github](https://github.com/andreknieriem/)

### Contributors
[nicekiwi](https://github.com/nicekiwi)  
[helloilya](https://github.com/helloilya)  
[bitstarr](https://github.com/bitstarr)  
[Geoffrey Crofte](http://geoffrey.crofte.fr/) - [Github](https://github.com/creativejuiz/)  
[Karl Anders](http://webseiten-anders.de/) - [Github](https://github.com/karland/)  
[Raphael Hättich](https://github.com/RaphaelHaettich)  
[Jochen Sengier](https://www.celcius.be) - [Github](https://github.com/celcius-jochen/)  
