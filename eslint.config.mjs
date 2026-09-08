import next from 'eslint-config-next';

const eslintConfig = [
  ...next,
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'node_modules/**', 'assets/**', 'index.html'],
  },
];

export default eslintConfig;
