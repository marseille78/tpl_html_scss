const pathDev = './dev';
const pathApp = './app';

module.exports = {
  root: pathApp,

  pug: {
    src: pathDev + '/pages/*.pug',
    watch: pathDev + '/**/*.pug',
    dest: pathApp,
  },

  html: {
    src: pathDev + '/pages/*.html',
    watch: pathDev + '/**/*.html',
    dest: pathApp,
  },

  scss: {
    src: pathDev + '/*.scss',
    watch: pathDev + '/**/*.scss',
    dest: pathApp + '/css',
  },

  js: {
    src: pathDev + '/**/*.js',
    watch: pathDev + '/**/*.js',
    dest: pathApp + '/js',
  },

  img: {
    src: pathDev + '/img/*.{png,jpg,jpeg,gif,svg}',
    watch: pathDev + '/img/*.{png,jpg,jpeg,gif,svg}',
    dest: pathApp + '/img',
  },

  fonts: {
    src: pathDev + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    watch: pathDev + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    dest: pathApp + '/fonts',
  },

  icons: {
    src: pathDev + '/icons/*.png',
    watch: pathDev + '/icons/*.png',
    dest: pathApp + '/img',
    destScss: pathDev + '/base',
  },
};