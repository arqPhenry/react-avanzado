const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'PetGram',
      template: './src/public/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@Category': path.resolve(__dirname, 'src/components/Category')

    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|svg|jp(e*)g|gif)$/,
        type: 'asset'
      }
    ]
  }
};
