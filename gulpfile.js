var gulp = require('gulp'),
    saas = require('gulp-sass');

//Create gulp task
gulp.task('styles', function () {
    return gulp.src('./sass/styles.scss')
        .pipe(saas())
        .on('error', saas.logError)
        .pipe(gulp.dest('./css'))
});

//Watcher
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['styles'])
});

gulp.task('default', ['styles']);