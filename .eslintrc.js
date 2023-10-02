module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['airbnb-base', 'prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-explicit-any': 2,
        'no-restricted-globals': 'off',
        'no-undef': 'off',
        'no-use-before-define': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-console': 'off',
        'no-alert': 'off',
        'import/prefer-default-export': 'off',
        'no-useless-return': 'off',
        'max-len': 'off',
        'prefer-const': 'off',
        'no-plusplus': 'off',
        'import/no-unresolved': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1624
        'import/extensions': ['warn', 'never'], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
    plugins: ['@typescript-eslint'],
};
