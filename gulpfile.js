var gulp = require('gulp'),
		sass = require('gulp-sass'),
		jshint = require('gulp-jshint'),
		uglify = require('gulp-uglify'),
		concat  = require('gulp-concat'),
		sourcemaps = require('gulp-sourcemaps'),
		clean = require('gulp-clean');

var srcPaths = {
  scripts: './src/js/**/*.js',
  sass: './src/scss/**/*.scss'
};
var destPath = './dest';

gulp.task('clean', function(){
  return gulp.src(destPath + '/*', {read: false})
		.pipe(clean());
});

gulp.task('sass', function (){
  return gulp.src(srcPaths.sass)
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(destPath));
});

gulp.task('lint', function(){
  return gulp.src(srcPaths.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish-cool'));
});

gulp.task('scripts', function(){
	gulp.src(srcPaths.scripts)
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(concat('main.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(destPath));
});

// Rerun the task when a file changes
gulp.task('watch', function(){
  gulp.watch(srcPaths.scripts, ['lint', 'scripts']);
  gulp.watch(srcPaths.sass, ['sass']);
});

gulp.task('default', ['watch', 'scripts', 'sass']);