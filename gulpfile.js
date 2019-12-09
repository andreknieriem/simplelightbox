let gulp = require("gulp"),
    babel = require("gulp-babel"),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    through = require('through2'),
    gap = require('gulp-append-prepend'),
    sass = require('gulp-sass');

/**
 *
 * replace dom node names and class properties. Both are
 * not part of the API but uglify wont consider them
 * as they are publicly exposed.
 *
 * @param chunk
 * @param enc
 * @param cb
 */
const customCompression = (chunk, enc, cb) => {

    let esString = chunk._contents.toString(),
        aCode = 97,
        domNodeMap = {},
        propertyMap = {},
        controlCoordinateMap = {};

    esString = esString
        .replace(/domNodes\.(\w+)/ig, function () {
            let domNodeName = arguments[1];
            if (!domNodeMap[domNodeName]) {
                domNodeMap[domNodeName] = String.fromCharCode(aCode + Object.keys(domNodeMap).length);
            }
            return 'domNodes.' + domNodeMap[domNodeName];
        })
        .replace(/controlCoordinates\s=\s\{([\s\S]*?)\}/i, function () {
            arguments[0] = arguments[0].replace(/^\s+(\w+)\s?\:/img, function () {
                controlCoordinateMap[arguments[1]] = String.fromCharCode(aCode + Object.keys(controlCoordinateMap).length + (Object.keys(controlCoordinateMap).length > 25 ? -58 : 0));
                return arguments[0] = arguments[0].replace(arguments[1], controlCoordinateMap[arguments[1]]);
            });
            return arguments[0];
        })
        .replace(new RegExp('\\.(' + Object.keys(controlCoordinateMap).join('|') + ')', 'g'), function () {
            return arguments[0].replace(arguments[1], controlCoordinateMap[arguments[1]]);
        })
        .replace(/^\s{4}([\w]+)(;|\s=)/img, function () {
            let propertyName = arguments[1];

            if (!propertyMap[propertyName]) {
                propertyMap[propertyName] = String.fromCharCode(aCode + Object.keys(propertyMap).length);
            }

            return arguments[0].replace(propertyName, propertyMap[propertyName]);
        })
        .replace(new RegExp(Object.keys(propertyMap).join('|'), 'g'), function () {
            return propertyMap[arguments[0]];
        });

    chunk._contents = Buffer.from(esString, 'utf-8');

    cb(null, chunk);
};

gulp.task("default", () => {
    return gulp.src("src/simple-lightbox.js")
        .pipe(babel())
        .pipe(gap.prependFile('./src/license-notice.txt'))
        .pipe(gulp.dest("dist"));
});

gulp.task("jquery", () => {
    return gulp.src("src/simple-lightbox.js")
        .pipe(gap.appendFile('./src/jquery-plugin-wrap.js'))
        .pipe(babel())
        .pipe(rename('simple-lightbox.jquery.js'))
        .pipe(gap.prependFile('./src/license-notice.txt'))
        .pipe(gulp.dest("dist"));
});

gulp.task('minify', () => {
    return gulp.src("src/simple-lightbox.js")
        .pipe(through.obj(customCompression))
        .pipe(babel())
        .pipe(uglify())
        .pipe(gap.prependFile('./src/license-notice.txt'))
        .pipe(rename('simple-lightbox.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('jquery-minify', () => {
    return gulp.src("src/simple-lightbox.js")
        .pipe(through.obj(customCompression))
        .pipe(babel())
        .pipe(gap.appendFile('./src/jquery-plugin-wrap.js'))
        .pipe(uglify())
        .pipe(gap.prependFile('./src/license-notice.txt'))
        .pipe(rename('simple-lightbox.jquery.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass', () => {
    return gulp.src('./src/*.scss')
        .pipe(sass({}))
        .pipe(gap.prependFile('./src/license-notice.txt'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass-minify', () => {
    return gulp.src('./src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename('simple-lightbox.min.css'))
        .pipe(gap.prependFile('./src/license-notice.txt'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', gulp.series('default', 'jquery', 'minify', 'jquery-minify', 'sass', 'sass-minify'));

gulp.task('watch', () => {
    gulp.watch('./src/*.js', gulp.series('default'));
    gulp.watch('./src/*.scss', gulp.series('sass'));
});
