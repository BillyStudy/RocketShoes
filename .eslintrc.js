module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [
          "error",
          { "extensions": [".js", ".jsx"] }
        ],
        "import/prefer-default-export": "off",
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "react/jsx-one-expression-per-line": "off",
        "react-native/no-color-literals": "off",
        "react-native/sort-styles": "off",
        "global-require": "off",
        "react-native/no-raw-text": "off"
      },
      "settings": {
        "import/resolver": {
          "babel-plugin-root-import": { "rootPathSuffix": "src" }
        }
      }
};