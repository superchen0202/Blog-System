const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DEV_MODE = 'development';

const createSCSSRules = (isModule) => {
  const moduleOptions = isModule
    ? {
        importLoaders: 1,
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        },
      }
    : {};
  return [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {},
    },
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        ...moduleOptions,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [require('tailwindcss'), require('autoprefixer')],
        },
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        implementation: require('sass'),
        additionalData:`$DEV_MODE: ${DEV_MODE};`,
      },
    },
    
  ];
};

module.exports = {
  
  mode: 'development',

  //Specify entry property, tell webpack where to start bundling the js files.
  entry: path.join(__dirname, "src", "index.tsx"),

  //Tell webpack to create the final bundled file in dist folder in the root of the project
  output: {
    path:path.resolve(__dirname, "dist"),
    filename: 'index.[hash].js',
  },

  resolve: {
    
    modules: [path.resolve('src'), path.resolve('node_modules')],
    
    alias: {
      '@': path.resolve('src'),
    },

    // 這樣 import 時就可以不需要寫 .jsx
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  module: {
    rules: [
      // Tell webpack to use babel-loader to transpile files that end with .js or .jsx
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",

          //transpiling ES2015+ syntax, react code and flowjs respectively
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'] 
          }
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve('src'),
        oneOf: [
          {
            test: /\.module.scss$/,
            use: createSCSSRules(true),
          },
          {
            test: /\.scss$/,
            use: createSCSSRules(false),
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[path][name].[ext]?[hash:10]',
              esModule: false, // 新版的 url-loader 要多加這個設定
            },
          },
        ],
        include: path.resolve('src/img'),
      },
    ]
  },

  plugins: [
    //This will take the /public/index.html and inject script tag to it. 
    //And move that HTML file to the dist folder.
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/html", "index.html"),
    }),

    new MiniCssExtractPlugin(),
  ],
  
  devtool: 'inline-source-map',
  
  stats: 'minimal',
  
  devServer: {
    
    // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
    // HTML5 History API
    historyApiFallback: true,
    port: 8080,
    hot: true,

    // can connect with ip, default is localhost
    host: '0.0.0.0',
    // proxy: [
    //   {
    //     //when relative path in local host exist "/api"
    //     //webpack dev server will automatically proxy on remote server at the target
    //     context: ['/api'],
    //     target: 'https://milkmidi-api-example-server.herokuapp.com/',
    //     changeOrigin: true,
    //   },
    // ],
  },
}