module.exports = {
  pug: {
    pretty: true,
    data: {
      dataHead: require("../data/dataHead.json"),
      dataMenu: require("../data/dataMenu.json"),
      dataCountries: require("../data/dataCountries.json"),
      dataLanguages: require("../data/dataLanguages.json"),
      dataCurrency: require("../data/dataCurrency.json"),
      dataCategory: require("../data/dataCategory.json"),
      dataSwiper: require("../data/dataSwiper.json"),
      dataReasons: require("../data/dataReasons.json"),
      dataBestsellers: require("../data/dataBestsellers.json"),
    },
  },

  html: {
    prefix: "@@",
    basepath: "@file",
  },

  imagemin: {
    verbose: true,
  },

  fonter: {
    // Вказуємо необхідні формати (окрім woff2)
    formats: ["ttf", "woff"],
  },

  icons: {
    imgName: "sprite.png",
    cssName: "sprite.scss",
    padding: 1,
  },
};
