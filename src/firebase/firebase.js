import * as firebase from 'firebase';
// import 'firebase/database'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBHdRVWfKR2A6M-cDMxS58QFvHT7OH2XA",
  authDomain: "kyexpensify.firebaseapp.com",
  databaseURL: "https://kyexpensify.firebaseio.com",
  projectId: "kyexpensify",
  storageBucket: "kyexpensify.appspot.com",
  messagingSenderId: "152714832878",
  appId: "1:152714832878:web:70bf9809c59f4897"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: 'Kurochan',
  age: 27,
  isSingle: true,
  location: {
    city: 'Shibuya-ku, Tokyo',
    country: 'Japan'
  }
});
database.ref('location/city').set('Okinawa-shi');

database.ref('isSingle').set(false);

database.ref('measurements').set({
  height: '6ft 3in',
  weight: '195lbs'
});
