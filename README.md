**[click here for the original readme file](ORIGINAL-README.md)**

# simplelightbox ES6 + noquery port

* removes jQuery dependency in favor of native code
* written using ES6 features
* compiles to classic js using babel

### differences in usage
When using the standalone variant (`simple-lightbox(.min).js`) the main difference is the instancing:

```javascript
new SimpleLightbox('.some-element a', { /* options */ });
```

The jquery-compatible (`simple-lightbox.jquery(.min).js`) variant works as before:
```javascript
$('.some-element a').simpleLightbox({ /* options */ });
```

### installation

Clone the project into an empty folder, then run `npm install`.

### babel in the browser

Open `src/index.html` to have `src/simple-lightbox.js` compiled inside your browser. Access the file through http for best results

### using gulp

Run `gulp watch` to enable continous watching of both `src/simple-lightbox.js` and `src/simple-lightbox.scss`. Both files
will be compiled to `dist/simple-lightbox.js` and `dist/simple-lightbox.css` respectively. Open `dist/index.html` in your browser to
inspect your changes...

### Building

just call `gulp build` to have all files and variants created inside `dist`! 

### Changes to the original 

* Events will now only be attached once, not on every load. 
* Removing events on destroy appears to be less reliable than with jquery, but should be of no actual concern as the original codes does not explicitly remove all bound handlers 
* internal variable names changed 
* `refresh()` only works when a selector is passed 
  