var gulp = require('gulp'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		concat  = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest'));
});

gulp.task('default', function(){
	gulp.src('./assets/js/*.js')
	.pipe(uglify())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('./dest'));
});