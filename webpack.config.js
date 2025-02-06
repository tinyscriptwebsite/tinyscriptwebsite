module.exports = {
  module: {
    rules: [
      {
        test: /\.mp4$|mp4/,
        // /\.js$|jsx/
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[ext]",
            esModule: false,
          },
        },
      },
    ],
  },
};
