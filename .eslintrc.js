const path = require('path');
module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
    env: {
        browser: true,
        jest: true,
    },
    extends: ['prettier', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-uses-react': 'off',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/display-name': 'off',
        "react-hooks/exhaustive-deps": "off"
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
