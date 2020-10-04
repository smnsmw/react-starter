import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssNormalize from 'postcss-normalize';


const isDevelopment = process.env.NODE_ENV !== 'production';
const isProduction = !isDevelopment;
const mode = isDevelopment ? 'development' : 'production'
console.log('Build params', {isDevelopment}); // todo: replace with chalk
export const config = {
    mode,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/app.tsx',
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [
          {
            oneOf: [
              {
              test: /\.[jt]sx?$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: require.resolve('babel-loader'),
                  options: {
                    plugins: [
                      isDevelopment && require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                  },
                },
              ],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
                isDevelopment && 'style-loader',
                isProduction && MiniCssExtractPlugin.loader,
                {
                  loader: 'css-loader',
                  options: {

                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    ident: 'postcss',
                    plugins: [
                      'postcss-flexbugs-fixes',
                      'postcss-preset-env',
                      {
                        autoprefixer: {
                          flexbox: 'no-2009',
                        },
                        stage: 3,
                      },
                      postcssNormalize(),
                    ],
                    sourceMap: isProduction,
                  },
                },
                {
                  loader: 'resolve-url-loader',
                  options: {
                    sourceMap: isProduction,
                  },
                },
                {
                  loader: 'sass-loader',
                  options: {
                    sourceMap: true,
                  }
                },
              ].filter(Boolean),
            },
            ]
          }
        ]
    },
    plugins: [
            isDevelopment && new HotModuleReplacementPlugin(),
            isDevelopment && new ReactRefreshWebpackPlugin({
                overlay: {
                    sockIntegration: "whm"
                }
            }),
    ].filter(Boolean),

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss']
    }
}

export default config;