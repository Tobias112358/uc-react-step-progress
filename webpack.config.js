import webpack from 'webpack';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const packageName = 'react-step-progress';

const webpackConfig = {
  mode: 'production',
  entry: "./src/index.tsx",
  devtool: 'inline-source-map',
  optimization: {
    minimize: false
  },
  output: {
    filename: `${packageName}.js`,
    library: {
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
  },
  externals: {
    react: "react",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
  devServer: {
    static: {
      directory: path.join(dirname(fileURLToPath(import.meta.url)), './example/src/'),
    }
  },
};

export default webpackConfig;
