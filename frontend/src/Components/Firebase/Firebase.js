import firebase from "firebase";

 var config = {
    apiKey: "AIzaSyAuCbV5D50Vd2JzHVacipr41wvqTFotRc0",
    authDomain: "medicoaid-721a6.firebaseapp.com",
    databaseURL: "https://medicoaid-721a6.firebaseio.com",
    projectId: "medicoaid-721a6",
    storageBucket: "medicoaid-721a6.appspot.com",
    messagingSenderId: "591820786119",
    appId: "1:591820786119:web:cd6a344622655fd042b1e2",
    measurementId: "G-DTLYHGCPL7"
  };

  firebase.initializeApp(config);

  export default firebase;