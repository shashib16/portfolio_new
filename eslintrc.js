module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'next',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    rules: {
      // Add your custom rules here
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  