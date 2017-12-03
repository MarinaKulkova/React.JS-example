module.exports = {
   entry: ["babel-polyfill","./src/index.jsx"],
   output: {
      path: __dirname,
      filename: "js/[name].bundle.js"
   },
   devtool: "eval-source-map",
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015', 'stage-0']
            }
         }
      ]
   }
};