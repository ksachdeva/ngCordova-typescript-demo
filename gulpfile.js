var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ngAnnotate = require("gulp-ng-annotate");
var tsc = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  ts: ['./www/app/**/*.ts'],
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task("compile:typescript", function () {
  var tsResult = gulp
		.src(paths.ts)
		.pipe(sourcemaps.init())
		.pipe(tsc({
		module: "amd",
		target: "ES5",
		declarationFiles: false,
		emitError: false,
		emitDecoratorMetadata: true
	}));		
	
	return tsResult.js
		.pipe(concat("demo.bundle.js"))
		.pipe(ngAnnotate())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./www"));

});

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.ts, ['compile:typescript']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});