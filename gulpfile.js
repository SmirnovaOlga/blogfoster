var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',['sass', 'watch']);

gulp.task('sass', function () {
    gulp.src('./app/css/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function () {
    gulp.watch('./app/css/*.scss', ['sass']);
});