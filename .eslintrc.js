module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // Usamos el parser de TypeScript
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      './tsconfig.json',
      './apps/ui_lib_demo/tsconfig.json',
      './packages/ui/tsconfig.json',
    ],
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@react-native',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        args: 'after-used', // Esto hace que ignore los argumentos no utilizados después de ser utilizados
        argsIgnorePattern: '^_', // Ignora los parámetros que empiezan con '_'
        varsIgnorePattern: '^_', // Ignora las variables que empiezan con '_'
      },
    ],
    '@typescript-eslint/no-var-requires': 'off',
  },
};
