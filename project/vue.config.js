module.exports = {
  chainWebpack: config => {
    if (process.env.NODE_ENV === "development") {
      // disable eval
      config.devtool("");
      // disable chunk splitting
      config.optimization.splitChunks({
        cacheGroups: {
          default: false,
        },
      });
      // disable js minification
      config.optimization.minimize(false);
    }
  },
};
