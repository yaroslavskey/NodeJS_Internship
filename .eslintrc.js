module.exports = {
    env: {
        es2021: true,
        node: true
    },

    extends: 'eslint:recommended',
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            }
        ],
        indent: ['error', 4],
        'no-console': ['error', {
            allow: ['warn', 'error', 'log'],
        }],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: ['const', 'let', 'var'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
    },
};
