const scss = () => {
  // return $.gulp.src($.path.scss.src, { sourcemaps: true })
  return $.gulp.src($.path.scss.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'SCSS',
        message: error.message,
      }))
    }))
    .pipe($.gp.sassGlob())
    .pipe($.sass())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    // .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: true }))
    .pipe($.gp.beautify.css({indent_size: 2}))
    .pipe($.gulp.dest($.path.scss.dest))
    // .pipe($.gp.shorthand())
    // .pipe($.gp.csso())
    // .pipe($.gp.rename({ suffix: '.min' }))
    // .pipe($.gulp.dest($.path.scss.dest))
    .pipe($.browserSync.stream());
};

module.exports = scss;