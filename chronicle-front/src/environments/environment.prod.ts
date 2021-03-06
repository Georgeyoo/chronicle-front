// export const environment = {
//   production: true
// };


// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`

export const environment = {
  production: false,
  // apiBase: 'http://localhost:8080/myapp',
  apiBase: 'http://3.236.46.62/api/myapp',
  isSignedIn: false,
  firebaseConfig: {
    apiKey: 'AIzaSyC4sxZlT-McTildwtxa8LV1lj7ZQhzOrs0',
    authDomain: 'training-team-253916.firebaseapp.com',
    projectId: 'training-team-253916',
    storageBucket: 'training-team-253916.appspot.com',
    messagingSenderId: '492701958610',
    appId: '1:492701958610:web:4a30a1be93803701d3480b',
    measurementId: 'G-DP6XDH9DTW'
  },
  serverApiUrls: {
    getTags: '/videos/available-tags',
    getAllVideos: '/videos/all',
    getVideosByTag: '/videos/tags/',
    getVideoById: '/videos/id/',
    getAllNotes: '/notes/all',
    getNotesByTag: '/notes/tags/',
    getNoteById: '/notes/id/',
    getFirebaseUsers: 'firebase',
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

