import path from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
export const config = {
    mode: 'development',
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
                test: /\.tsx?$/,
                loader: 'babel-loader',
            },
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin(),
    ],
}

export default config;