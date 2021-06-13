module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'rules': {
    'max-len': ['error',
      {'code': 120,
        'ignoreComments': true,
        'ignoreUrls': true,
      }],
    'comma-dangle': ['error', 'only-multiline'],
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
    'linebreak-style': ['error', 'windows']
  },
};
