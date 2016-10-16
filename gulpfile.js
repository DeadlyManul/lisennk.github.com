var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var moduleImporter = require('sass-module-importer');

gulp.task('sass', function() {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass({ importer: moduleImporter() }))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
