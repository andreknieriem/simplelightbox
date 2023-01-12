# simplelightbox
Touch-friendly image lightbox for mobile and desktop

### Features
* Responsive
* Touch friendly
* Swipe gestures for next/previous image
* Easy to install, easy to use
* Minimalistic
* Only some css is included. You can change the style like you want!
* Lots of options
* Preloading next and previous image
* Android, iOs and Windows phone support
* CSS3 Transitions with fallback for older browsers
* Works in every modern Browser, even in IE 11
* Can use jQuery 1.x, 2.x and 3.x. This is not required.
* Keyboard support
* Pinch to zoom
* Double-tap to zoom

### Install
```sh
// YARN
yarn add simplelightbox

// Bower
bower install simplelightbox

// NPM
npm install simplelightbox
```

After that include simple-lightbox(.min).css and simple-lightbox(.min).js to your page.

### Usage
#### Standalone Plugin
When using the standalone variant (`simple-lightbox(.min).js`)
```javascript
new SimpleLightbox('.some-element a', { /* options */ });
```

The jQuery-compatible (`simple-lightbox.jquery(.min).js`) variant works as before (v1.x):
```javascript
$('.some-element a').simpleLightbox({ /* options */ });
```

#### With Webpack/Browserify/Parcel etc...
Choose the module file you want to import or require.

**Module with Babel tranformation**
```javascript
import SimpleLightbox from "simplelightbox";
```

**Plain ES Module without Babel**
```javascript
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
```

### Markup
For the default setup, you just need links that are pointing to images.

```markup
<div class="gallery">
    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
</div>
```

The markup inside the A-Tags can be whatever you want. In this example thumbnails of the big images. The 'title' tag is used by default to show a caption.
For a complete example just look at the demo folder.

### JavaScript Options
| Property | Default | Type | Description |
| -------- | ------- | ---- | ----------- |
| sourceAttr | href | string | The attribute used for large images |
| overlay | true | bool | Show an overlay or not |
| overlayOpacity | 0.7 | float | the opacity of the overlay |
| spinner | true | bool | Show spinner or not |
| nav | true | bool | Show arrow-navigation or not |
| navText | ['&larr;','&rarr;'] | array | Text or html for the navigation arrows |
| captions | true | bool | Show captions if available or not |
| captionSelector | 'img' | string or function | Set the element where the caption is. Set it to "self" for the A-Tag itself or use a callback which returns the element |
| captionType | 'attr' | string | How to get the caption. You can choose between attr, data or text |
| captionsData | title | string | Get the caption from given attribute |
| captionPosition | 'bottom' | string | The position of the caption. Options are top, bottom or outside (note that outside can be outside the visible viewport!) |
| captionDelay | 0 | int | Adds a delay before the caption shows (in ms) |
| captionClass | '' | string | Add an additional class to the sl-caption |
| close | true | bool | Show the close button or not |
| closeText | '×' | string | Text or html for the close button |
| swipeClose | true | bool | Swipe up or down to close gallery |
| showCounter | true | bool | Show current image index or not |
| fileExt | 'png&#124;jpg&#124;jpeg&#124;gif' | regexp or false | List of file extensions the plugin works with or false to disable the check |
| animationSpeed | 250 | int | How long the slide animation takes |
| animationSlide | true | bool | Wether to slide in new photos or not, disable to fade |
| preloading | true | bool | Allows preloading next and previous images |
| enableKeyboard | true | bool | Allow keyboard arrow navigation and close with ESC key |
| loop | true | bool | Enables looping through images |
| rel | false | mixed | By default, false means that the lightbox groups by rel automatically. This option can be used as an anchor rel alternative for Simplelightbox. It allows the user to group any combination of elements together for a gallery, or to override an existing rel so elements are not grouped together. Note: The value can also be set to 'nofollow' to disable grouping. |
| docClose | true | bool | Closes the lightbox when clicking outside |
| swipeTolerance | 50 | int | The amount of pixels you have to swipe, until next or previous image |
| className: | 'simple-lightbox' | string | Adds a class to the wrapper of the lightbox |
| widthRatio: | 0.8 | float | Ratio of image width to screen width |
| heightRatio: | 0.9 | float | Ratio of image height to screen height |
| scaleImageToRatio: | false | bool | Scales the image up to the defined ratio size |
| disableRightClick | false | bool | Disable rightclick on image or not |
| disableScroll | true | bool | Stop scrolling page if lightbox is opened |
| alertError | true | bool | Show an alert if image was not found. If false error will be ignored |
| alertErrorMessage | 'Image not found, next image will be loaded' | string | The message displayed if image was not found |
| additionalHtml | false | string | Additional HTML showing inside every image. Usefull for watermark etc. If false nothing is added |
| download | false | string | Text for a download link below the image. If false nothing is added |
| history | true | bool | Enable history back closes lightbox instead of reloading the page |
| throttleInterval | 0 | int | Time to wait between slides |
| doubleTapZoom | 2 | int | Zoom level when double tapping on an image |
| maxZoom | 10 | int | Maximum zoom level on pinching |
| htmlClass | 'has-lightbox' | string or false | Adds class to html element if lightbox is open. If empty or false no class is set |
| rtl | false | bool | Change direction to right-to-left |
| fixedClass | 'sl-fixed' | string | Elements with this class are fixed and get the right padding when lightbox opens |
| fadeSpeed | 300 | int | The duration for fading in and out in milliseconds. Used for caption fadein/out too. If smaller than 100 it should be used with animationSlide:false |
| uniqueImages | true | bool | Whether to uniqualize images or not |
| focus | true | bool | Focus the lightbox on open to enable tab control |
| scrollZoom | true | bool | Can zoom image with mousewheel scrolling |
| scrollZoomFactor | true | bool | How much zoom when scrolling via mousewheel |

### Events
| Name | Description |
| ---- | ----------- |
| show.simplelightbox | Fires before the lightbox opens |
| shown.simplelightbox | Fires after the lightbox was opened |
| close.simplelightbox | Fires before the lightbox closes |
| closed.simplelightbox | Fires after the lightbox was closed |
| change.simplelightbox | Fires before image changes |
| changed.simplelightbox | Fires after image was changed |
| next.simplelightbox | Fires before next image arrives |
| nextDone.simplelightbox | Fires after next image arrived |
| prev.simplelightbox | Fires before previous image arrives |
| prevDone.simplelightbox | Fires after previous image arrived |
| nextImageLoaded.simplelightbox | Fires after next image was loaded (if preload activated) |
| prevImageLoaded.simplelightbox | Fires after previous image was loaded (if preload activated) |
| error.simplelightbox | Fires on image load error |

**Example**  
```javascript
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// Do something…
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // Some usefull information
});

// with jQuery nearly the same
let gallery = $('.gallery a').simpleLightbox();
gallery.on('show.simplelightbox', function () {
	// Do something…
});
```

### Public Methods
| Name | Description |
| ---- | ----------- |
| open | Opens the lightbox with a given Element |
| close | Closes current openend Lightbox |
| next | Go to next image |
| prev | Go to previous image |
| destroy | Destroys the instance of the lightbox |
| refresh | Destroys and reinitializes the lightbox, needed for eg. Ajax Calls, or after dom manipulations |
| getLighboxData | Get some useful lightbox data |

**Example**  
```javascript
var gallery = $('.gallery a').simpleLightbox();

gallery.next(); // Next Image
```

### Multiple Lightboxes on one page
You can have multiple lightboxes on one page if you give them different selectors. Here is a small example:

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

### Contributing
**using gulp**  
Run `gulp watch` to enable continous watching of both src/simple-lightbox.js and src/simple-lightbox.scss. Both files will be compiled to dist/simple-lightbox.js and dist/simple-lightbox.css respectively. Open dist/index.html in your browser to inspect your changes...

**Building**  
Just call `gulp build` to have all files and variants created inside dist!

### Changelog
**2.12.1 - Fixing #292. Error with download-link**  
**2.12.0 - Merging #283. Fixing className whitespace error. Thanks to @MVogge. Merging #287, which fixes #286 thanks to @majid-1xinternet. Added download option. Thanks to @cnotin**    
**2.11.0 - Added possibility to add multiple classes to captions #280, added possibility for better selectors which fixes #62 again, fixed #268 lightbox not centered with scrolling**    
**2.10.4 - Fixed #277 - add passive listener for scroll events, #276 mistake z-index**    
**2.10.3 - Fixed #264 - Fixed wrong mouse-zoom when the page is scrolled**    
**2.10.2 - Fixed #258 with opacity flicker on overlay. For this, moved style option captionOpacity to js plugin**    
**2.10.1 - Fixed #255 fast switching photos and #256 for hiding back and next buttons on loop: false**    
**2.10.0 - Fixed #254 - Nav Buttons disappear and adding new method getLighboxData so get some useful data for #251**    
**2.9.0 - Added mousescroll function with new options mouseScroll and mouseScrollFactor**  
**2.8.1 - Fixed #250 - No closing if image load fails. #249 Disable scroll on Mac works now**  
**2.8.0 - Fixed #235 - legacy file too big. #236 bad package.json and added support for passive event listeners #240. Thanks to @coderars for the issues and some code**  
**2.7.3 - Fixed #232 - sourceAttr does not work. Thanks to @bivisual for the issue**  
**2.7.2 - Fixed #231 - disableRightClick doesn't. Thanks to @DrMint for the fix**  
**2.7.1 - Fixed #228 - no mouse swiping in firefox. Thanks to @DrMint for the fix**  
**2.7.0 - Merged #206 which fixes #205. Thanks to @ocean90 for the idea and PR**  
**2.6.0 - Added new option uniqueImages for #156, focus for #190 and fixed bug #200 issue closing during animation**  
**2.5.0 - Added new option fadeSpeed. This will fix #147 and #186**  
**2.4.1 - Added new simple-lightbox.legacy.js with IE 11 Support. Fixes #175, #178, #183 and some other bugs from 2.4.0**  
**2.4.0 - Added new option for fixed elements class #195**  
**2.3.0 - Merged Feature for ESM Modules. Thanks to Dmytro Hrynevych #180**  
**2.2.2 - Fixed direct closing on load error #182**  
**2.2.1 - Fixed bug #174 and problem with ES Modules**  
**2.2.0 - Added ES Modules support, thanks to @seralichtenhahn for the PR. This fixed #164**  
**2.1.5 - Fixed bug #169 open method with jQuery and #171 error while pan on mobile devices**  
**2.1.4 - Fixed bug #168 doubletap zoom on touch devices**  
**2.1.3 - Fixed bug in destroy method #167 and bug with html in  navText #165**  
**2.1.2 - Fixed additionalHtml bug #163**      
**2.1.1 - Fixed captions bug #162**      
**2.1.0 - Added rel grouping feature #16 and added rtl support #161**      
**2.0.0 - Complete rewrite. Now uses modern ES6 javascript, without the need of jQuery. Can use jQuery anyway. Developers can use gulp with babel to contribute. Thanks to Mtillmann #129 for the implementation**    
**1.17.3 - Fixed new chrome passive error #155**  
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
[Martin Tillmann](https://github.com/Mtillmann)  
[nicekiwi](https://github.com/nicekiwi)  
[helloilya](https://github.com/helloilya)  
[bitstarr](https://github.com/bitstarr)  
[Geoffrey Crofte](http://geoffrey.crofte.fr/) - [Github](https://github.com/creativejuiz/)  
[Karl Anders](http://webseiten-anders.de/) - [Github](https://github.com/karland/)  
[Raphael Hättich](https://github.com/RaphaelHaettich)  
[Serafin Lichtenhahn](https://github.com/seralichtenhahn)  
[Jochen Sengier](https://www.celcius.be) - [Github](https://github.com/celcius-jochen/)  
[Dmytro Hrynevych](https://github.com/dmh)  
[Dominik Schilling](https://dominikschilling.de/) - [Github](https://github.com/ocean90/)  
[DrMint](https://github.com/DrMint)  
