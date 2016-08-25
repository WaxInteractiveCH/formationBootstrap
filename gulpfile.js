// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

// Styles
gulp.task('styles', function () {
    return watch('assets/stylesheets/**/*.scss', function(){
        return gulp.src('assets/stylesheets/bootstrap.scss')
            .pipe(sass({style: 'expanded'}))
            .pipe(gulp.dest('assets/stylesheets'))
            .pipe(notify({message: 'Styles task complete'}))
    });

});

// Livereload
gulp.task('livereload', function() {
    gulp.src(['./assets/stylesheets/bootstrap.css'])
        .pipe(watch())
        .pipe(connect.reload());
});

// Webserver
gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            livereload: true,
            open: true
        }));
});


// Default task
gulp.task('default', ['styles', 'webserver', 'livereload']);