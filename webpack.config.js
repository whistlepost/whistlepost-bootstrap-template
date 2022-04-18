const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GoogleFontsPlugin = require('google-fonts-plugin')

module.exports = {
  entry: './src/main/resources/assets/js/wp-bootstrap.js',
  output: {
    filename: 'js/wp-bootstrap.bundle.js',
    path: path.resolve(__dirname, 'src/main/resources/assets')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
	  {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': './src/main/resources/',
            	'useRelativePath': true,
            	publicPath: '/assets/wp-bootstrap/images/'
			}
          }
	  	]
      },
	  {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': './src/main/resources/',
            	'useRelativePath': true,
				publicPath: '/assets/wp-bootstrap/fonts/'
			}
          }
        ]
      },
	  {
        test: require.resolve('jquery'),
        use: [
        	{
			  loader: 'expose-loader',
			  options: 'jQuery'
		    },
		    {
				loader: 'expose-loader',
				options: '$'
			}
		]
      }
    ]
  },
  plugins: [
//    new GoogleFontsPlugin({
//		fonts: [
//			{ family: "Noto Serif" }
//		],
//		filename: 'css/fonts.css'
//	}),
    new MiniCssExtractPlugin({
        filename: "css/wp-bootstrap.bundle.css"
    })
  ]
};
