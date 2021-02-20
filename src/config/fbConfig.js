 import firebase from 'firebase/app';
 import 'firebase/firestore' ;
 import 'firebase/auth';

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyD7Amqewe-pmqWriePiV1BWVakAJoMQepo",
    authDomain: "mario-plan-61e1e.firebaseapp.com",
    projectId: "mario-plan-61e1e",
    storageBucket: "mario-plan-61e1e.appspot.com",
    messagingSenderId: "870247775656",
    appId: "1:870247775656:web:7f82e48d3294821197719d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots:true});
  export default firebase;