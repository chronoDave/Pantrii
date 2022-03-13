module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [{
    files: ['src/redux/slices/*.ts'],
    rules: {
      'no-param-reassign': 'off',
    }
  }],
  rules: {
    // Typescript
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    // General
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-nested-ternary': 'off',
    'operator-linebreak': ['error', 'after'],
    'arrow-parens': ['error', 'as-needed'],
    'no-console': ['error', {
      allow: ['warn', 'info']
    }],
    'max-len': 'off',
    // React
    'react/function-component-definition': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    // Import
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      groups: [
        'builtin',
        ['external', 'internal'],
        'parent',
        'sibling',
        'index'
      ],
      'newlines-between': 'always-and-inside-groups'
    }]
  }
};
