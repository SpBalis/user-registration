// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:8080',
  firebase : {
    apiKey: "AIzaSyB-GKv2d65lNaGq-rZ1oOsKzPyJfstgtvE",
    authDomain: "user-registration-a92e4.firebaseapp.com",
    databaseURL: "https://user-registration-a92e4.firebaseio.com",
    projectId: "user-registration-a92e4",
    storageBucket: "user-registration-a92e4.appspot.com",
    messagingSenderId: "1078706754091",
    appId: "1:1078706754091:web:9f258f9423f38d33e1906e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
