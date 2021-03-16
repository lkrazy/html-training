module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-param-reassign': [2, { props: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    semi: [2, 'never'],
    camelcase: 'off',
    'comma-dangle': [2, 'never'],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'import/prefer-default-export': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    'no-lonely-if': 'off',
    'max-len': [
      'error',
      120,
      {
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true
      }
    ],
    'class-methods-use-this': 0,
    eqeqeq: 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true
      }
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    }
  ]
}
