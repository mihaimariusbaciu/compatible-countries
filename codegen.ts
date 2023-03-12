import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://admin-core.test.virtaglobal.com/public',
  documents: ['src/**/*.tsx'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './src/gql_gen/': {
      preset: 'client',
      config: {
        useTypeImports: true,
      },
      plugins: ['typescript','typescript-operations' ],
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};

export default config;
