import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
const app = express();
const compiler = webpack(webpackConfig as any);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));
app.use(express.static('dist'));
app.use(express.static('public'));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on por 3000!\n');
});