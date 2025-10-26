import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import mantine from 'eslint-config-mantine';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...mantine,
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'] },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
]);

export default eslintConfig;
