import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const ENV = process.env.NODE_ENV || 'development';
const DEV = ENV === 'development';
const PROD = ENV === 'production';
const SOURCE_DIR = 'src';
const DEST_DIR = 'dist';
const PUBLIC_PATH = '/';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  mode: ENV,
  entry: path.join(__dirname, SOURCE_DIR, 'index.tsx'),
  output: {
    path: path.join(__dirname, DEST_DIR),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }, {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              declaration: true,
              declarationDir: 'dist',
              types: ['@types/react'],
            },
          },
        }]
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
        },
        test: /\.css$/i,
      },
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV)
      }
    }),
    new LiveReloadPlugin()
  ]
};
