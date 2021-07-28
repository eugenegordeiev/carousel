// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
  production: false,
  env: 'dev',

  settings: {
    api: {
      server: '',
      protocol: 'http',
      port: '8080'
    }
  }
};