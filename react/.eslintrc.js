module.exports = {
  extends: [
    'standard',
    'plugin:react/all',
    'plugin:flowtype/recommended'
  ],
  parser: 'babel-eslint',
  plugins: [
    'standard',
    'react',
    'flowtype'
  ],
  rules: {
    'camelcase': 'off',
    'react/forbid-component-props': 'off',
    'react/no-danger': 'off',
    'react/jsx-no-bind': ['warn', {ignoreRefs: true}],
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': ['warn', 2],
    'react/jsx-indent-props': ['warn', 2]
  }
}
