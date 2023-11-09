const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    components: {
      import: path.resolve(__dirname, 'src/scripts/views/components/index.js'),
      dependOn: 'shared',
    },
    index: {
      import: path.resolve(__dirname, 'src/scripts/index.js'),
      dependOn: 'shared',
    },
    shared: [path.resolve(__dirname, 'src/scripts/data/api-endpoint.js')],
  },
  output: {
    filename: '[contenthash]-[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(html|svg)$/,
        type: 'asset/source',
        exclude: path.resolve(__dirname, 'src/index.html'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/'),
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/**'],
          },
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: '[contenthash]-[name].css',
    }),
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimize: true,
    minimizer: [
      new CleanWebpackPlugin(),
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: [
          {
            implementation: ImageMinimizerPlugin.svgoMinify,
            options: {
              multipass: true,
              plugins: ['preset-default'],
            },
          },
          {
            implementation: ImageMinimizerPlugin.sharpMinify,
          },
        ],
      }),
    ],
  },
};
