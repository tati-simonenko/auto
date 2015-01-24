var gulp = require('gulp'),
connect = require('gulp-connect'),
opn = require('opn');

gulp.task('connect', function() {
connect.server({
root: 'app',
livereload: true
});
opn('http://localhost:8080/');
});

//html
gulp.task('html', function () {
gulp.src('./app/*.html')
.pipe(connect.reload());
});

//css
gulp.task('css', function () {
gulp.src('./app/css/*.css')
.pipe(connect.reload());
});


gulp.task('watch', function () {
gulp.watch(['./app/*.html'], ['html']);
gulp.watch(['./app/css/*.css'], ['css']);
});

gulp.task('default', ['connect', 'watch']);