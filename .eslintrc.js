module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"spellcheck"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"react/react-in-jsx-scope": "off",
		"spellcheck/spell-checker": [1, {
			"comments": true,
			"strings": true,
			"identifiers": true,
			"templates": true,
			"lang": "en_US",
			"skipWords": [
				"utils",
				"bool"
			]
		}]
	}
};
