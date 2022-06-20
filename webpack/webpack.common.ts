const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
import { generateFilePath } from '../environments/EnvironmentUtils'
import Dotenv from 'dotenv-webpack';

module.exports = (envVars) => {

  return {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            },
            },
          ],
        },
        {
          test: /\.(s(a|c)ss)$/,
          exclude: /node_modules/,
          // include: path.resolve(__dirname, 'src'),
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: 'bundle.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html'),
      }),
      new Dotenv({
        path: `./environments/.env.${generateFilePath(envVars)}`,
    }),
    ],
  }
}