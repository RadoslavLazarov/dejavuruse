const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const browserify = require('gulp-browserify');
// const concat = require('gulp-concat');

gulp.task('lintChecker', () => gulp.src(['./*.js', './routes/*.js', './static/js/*.js'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('scssCompiler', () => gulp.src('./client/scss/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./static/css/')));

gulp.task('scss:watch', () => {
  gulp.watch('./client/scss/**/*.scss', ['scssCompiler']);
});

gulp.task('lint:watch', () => {
  gulp.watch('./static/js/*.js', ['lintChecker']);
  gulp.watch('./controllers/*.js', ['lintChecker']);
  gulp.watch('./server.js', ['lintChecker']);
});

gulp.task('jsCompiler', () => {
  gulp.src(['client/js/index.js'])
    .pipe(browserify({
      insertGlobals: true,
    }))
    // .pipe(concat('bundle.js'))
    .pipe(gulp.dest('static/js/'));
});

gulp.task('jsCompiler:watch', () => {
  gulp.watch('client/js/**/*.js', ['jsCompiler']);
});

gulp.task('scss', ['scssCompiler', 'scss:watch']);
gulp.task('lint', ['lintChecker', 'lint:watch']);
gulp.task('js', ['jsCompiler', 'jsCompiler:watch']);
gulp.task('default', ['scss', 'js']);
