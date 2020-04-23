module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:jest/recommended'
  ],
  plugins: ['prettier', 'jest'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "camelcase":"off",
    "no-param-reassign":"off",
    "no-unused-vars": ["error", { "argsIgnorePattern":"next" }],
    "jest/expect-expect": ["error",
      {
        "assertFunctionNames": ["request.*.expect", "expect"]
      }
    ]
  }
};
