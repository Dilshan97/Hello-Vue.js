
import firebase from 'firebase';

const settings = {
  timestampsInSnapshots: true
};

var config = {
  apiKey: "AIzaSyBF4aG-wf3Yl83nH9LNnlPIMGPBlPd7nNQ",
  authDomain: "deliveryapp-2727f.firebaseapp.com",
  databaseURL: "https://deliveryapp-2727f.firebaseio.com",
  projectId: "deliveryapp-2727f",
  storageBucket: "deliveryapp-2727f.appspot.com",
  messagingSenderId: "878599933785"
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore()
const auth = firebase.auth()
const currentUser = auth.currentUser

firebase.firestore().settings(settings);

export default firebase;