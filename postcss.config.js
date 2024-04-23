const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    require('postcss-import')({}),
    
    autoprefixer({
      overrideBrowserslist: [
        "> 1%",
        "last 4 versions",
        "not dead"
      ]
    }),
  ],
};