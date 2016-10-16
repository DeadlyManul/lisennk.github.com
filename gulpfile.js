var gulp = require('gulp');
var sass = require('gulp-sass');
var moduleImporter = require('sass-module-importer');


gulp.task('default', function() {
    gulp.src('./src/sass/main.scss')
        .pipe(sass({ importer: moduleImporter() }))
        .pipe(gulp.dest('public'));
});