import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';
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
                'style-loader',
                'css-loader',
                'sass-loader',
              ],
            },
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
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
}

export default config;