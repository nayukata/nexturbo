module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  // Reactのバージョンを自動で検出する
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'sort-destructure-keys', 'import-access', 'prettier'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    '@next/next/no-html-link-for-pages': 'off',

    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'import/newline-after-import': 'error',
    'import/no-default-export': 'error',
    'import-access/jsdoc': 'error',

    // ソート
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 2,

    // @typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        semi: false,
        bracketSpacing: true,
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/app/**/*.tsx',
        '**/pages/**/*.ts',
        'next.config.mjs',
        'playwright.config.ts',
        '**/$path.ts',
        '**/$api.ts',
      ],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
}
