const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index_bundle.js",
	},
	target: "web",
	devServer: {
		port: "5000",
		static: {
			directory: path.join(__dirname, "public")
		},
		open: true,
		hot: true,
		liveReload: true,
		historyApiFallback: true
	},
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: require.resolve("babel-loader"),
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html")
		})
	]
};