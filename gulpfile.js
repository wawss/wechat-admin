var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    babel = require('gulp-babel');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});


var jsFile = 'src/app-controllers/**/*.js'
gulp.watch(jsFile, function() {
    gulp.src(jsFile, { base: 'src' }).pipe(babel({ presets: ['es2015'] })).pipe(gulp.dest('dist'));
});

gulp.task('default', ['webserver']);