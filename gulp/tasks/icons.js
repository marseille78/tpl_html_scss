const icons = (done) => {
  const spriteData = $.gulp.src($.path.icons.src)
    .pipe($.sp($.app.icons));

  spriteData.img.pipe($.gulp.dest($.path.icons.dest)); // Path to save image
  spriteData.css.pipe($.gulp.dest($.path.icons.destScss)); // Path to save styles

  done();
};

module.exports = icons;