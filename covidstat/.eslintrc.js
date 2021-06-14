module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "react", "react-hooks"],
  settings: {
    react: {
      pragma: "React",
      version: "detect",
    },
    "import/ignore": "node_modules", // To avoid false positive lint errors when importing interfaces from here.
  },
  rules: {
    // Settings
    camelcase: 1,
    "no-undef": "error",
    "no-plusplus": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    // React
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/self-closing-comp": 2,
    "react/button-has-type": 0,
    "react/jsx-filename-extension": 0,
    "react/no-used-expressions": 0,
    "react/destructuring-assignment": 0,
    // Import
    "import/order": [
      "error",
      {
        "newlines-between": "always-and-inside-groups",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern:
              "@{app,components,locales,models,navigation,screens,theme,store}{,/**}",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "react"],
      },
    ],
    "import/no-unresolved": 0,
    "import/no-cycle": [1],
    // React hooks
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": 1,
    "no-console": 1,
  },
};
