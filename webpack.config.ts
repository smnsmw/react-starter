import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

export const config = {
    mode: isDevelopment ? 'development' : 'production',
    entry: [
        'webpack-hot-middleware/client',
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