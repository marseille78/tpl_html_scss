const html = () => {
  return $.gulp.src($.path.html.src)
    .pipe($.gp.plumber({
      errorHandler: $.gp.notify.onError(error => ({
        title: 'HTML',
        message: error.message
      })),
    }))
    .pipe($.gp.fileInclude($.app.html))
    // .pipe($.gp.webpHtml()) // Розблокувати при застосуваннні WEBP
    .pipe($.gp.beautify.html({
      indent_size: 4,
      preserve_newlines: false,
    }))
    .pipe($.gulp.dest($.path.html.dest))
    .pipe($.browserSync.stream())
}

module.exports = html;