const minify = require('gulp-minify');
var gulp = require('gulp');
var gulpConCat = require('gulp-concat')
gulp.task('compress', async function () {
    gulp.src('basicWork.js')
        .pipe(minify({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('dist'))
});