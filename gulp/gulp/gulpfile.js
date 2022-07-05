const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const zip = require('gulp-zip');
const uglify = require('gulp-uglify');

function liveReload() {
  browserSync.init({
    server: './src'
  });

  gulp.watch('src/sass/*.scss', cssTranspile);
  gulp.watch('src/scripts/*.js', jsCompile);
  gulp.watch("src/*.html").on('change', browserSync.reload);
  gulp.watch('src/sass/*.scss', autoPref);
  gulp.watch('src/zip/*', addZip);
}

function cssTranspile() {
  return gulp.src('./src/sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
}

function jsCompile() {
  return gulp.src('./src/scripts/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./src/js'));
}

function autoPref() {
  return gulp.src('./src/sass/main.scss')
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('dist'))
}

function addZip() {
  return gulp.src('src/zip/*')
    .pipe(zip('archive.zip'))
    .pipe(gulp.dest('dist'))
}

function jsUglify () {
  gulp.src('./src/js/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('build/js'))
}


exports.default = liveReload;
exports.sass = cssTranspile;
exports.js = jsCompile;
exports.sass = autoPref;
exports.zip = addZip;
exports.js = jsUglify;

