var gulp = require('gulp');
var coffee = require('gulp-coffee');
var minify = require('gulp-uglify');
var concat = require('gulp-concat');
var utils = require('gulp-util');
var minifyCSS = require('gulp-minify-css');

gulp.task('scripts', function () {
  var scripts = gulp.src('client/scripts/**/*.coffee');
  scripts = scripts.pipe(coffee({
    bare: true
  }).on('error', function (err) {
    utils.log(err);
  }));
  scripts = scripts.pipe(concat('scripts.min.js'));
  scripts = scripts.pipe(minify());
  scripts = scripts.pipe(gulp.dest('./client'));
});

gulp.task('styles', function () {
  var styles = gulp.src('client/styles/**/*.css');
  styles = styles.pipe(concat('styles.min.css'));
  styles = styles.pipe(minifyCSS());
  styles = styles.pipe(gulp.dest('./client'));
});

gulp.task('watch', function () {
  gulp.watch(['client/scripts/**/*.coffee'], ['scripts']);
  gulp.watch(['client/styles/**/*.css'], ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);