global.$ = {
  // Пакети
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  sass: require('gulp-sass')(require('sass')),
  del: require('del'),
  sp: require('gulp.spritesmith'),

  // Конфігурація
  path: require('./gulp/config/path.js'),
  app: require('./gulp/config/app.js'),
};

// Підключення тасок
const requireDir = require('require-dir');
const task = requireDir('./gulp/tasks');

// Спостереження
const watcher = () => {
  $.gulp.watch($.path.html.watch, task.html);
  $.gulp.watch($.path.scss.watch, task.scss);
  $.gulp.watch($.path.js.watch, task.js);
  $.gulp.watch($.path.img.watch, task.img);
  $.gulp.watch($.path.fonts.watch, task.fonts);
  $.gulp.watch($.path.icons.watch, task.icons);
};

// Задачі для зовнішнього використання
exports.server = task.server;
exports.html = task.html;
exports.scss = task.scss;
exports.js = task.js;
exports.libcss = task.libcss;
exports.libjs = task.libjs;
exports.clear = task.clear;
exports.img = task.img;
exports.fonts = task.fonts;
exports.icons = task.icons;

// Збірка
exports.default = $.gulp.series(
  task.clear,
  $.gulp.parallel(
    task.libcss,
    task.libjs,
  ),
  $.gulp.parallel(task.html, task.scss, task.js, task.img, task.fonts, task.icons),
  $.gulp.parallel(task.server, watcher)
);