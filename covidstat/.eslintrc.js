module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:import/typescript"
	],
	"plugins": [
		"react", 
		"@typescript-eslint", 
		"prettier",
		"react-hooks"
	],
	"env": {
		"browser": true,
		"jasmine": true,
		"jest": true,
		"es6": true,
		"node": true
	},
	"rules": {
		// Prettier
		"prettier/prettier": [2, 
			{ 
				"singleQuote": true,
				"trailingComma": "all",
				"tabWidth": 2,
				"arrowParens": "always",
				"printWidth": 100
			}
		],
		// Settings
		"camelcase": 1,
		"no-shadow": 0,	
		"no-plusplus": 0,
		// React
		"react/react-in-jsx-scope": "off",
		"react/prop-types": 0,
		"react/self-closing-comp": 2,
		"react/button-has-type": 0,
		"react/no-did-mount-set-state": 0,
		"react/no-did-update-set-state": 0,
		"react/jsx-filename-extension": 0,
		"react/no-used-expressions": 0,
		"react/destructuring-assignment": 0,
		"react/forbid-prop-types": 0,
		"react/sort-comp": [
			1,
			{
				"order": ["static-methods", "lifecycle", "everything-else", "rendering"],
				"groups": {
					"rendering": ["/^render.+$/", "render"]
				}
			}
		],
		// Import
		"import/order": 2,
		"import/no-unresolved": 0,
		"import/no-relative-parent-imports": "error",
		// React hooks
		"react-hooks/rules-of-hooks": 2,
		"react-hooks/exhaustive-deps": 1,
		"no-console": 1,
		//typescript
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-non-null-assertion": "off"
	},
	"settings": {
		"react": {
			"pragma": "React",
			"version": "detect"
		},
		"import/ignore": "node_modules" // To avoid false positive lint errors when importing interfaces from here.
	},
	"parser": "@typescript-eslint/parser"
}
