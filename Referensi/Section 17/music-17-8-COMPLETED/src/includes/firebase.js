import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAaSyK7W0_UWeDMTKiwTVcjTGZgX2qRkP8',
  authDomain: 'music-c2596.firebaseapp.com',
  projectId: 'music-c2596',
  storageBucket: 'music-c2596.appspot.com',
  appId: '1:417422649545:web:7439d0a2f274a0585ac518',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
