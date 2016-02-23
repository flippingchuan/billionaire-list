var gulp = require('gulp'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify'),
		concat  = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('default', function(){
	gulp.src('./assets/js/*.js')
	.pipe(browserify())
	.pipe(uglify())
	.pipe(concat('bundle.js'))
	.pipe(gulp.dest('./dest'));
});