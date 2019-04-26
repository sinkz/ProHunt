import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyBl6mFOHUSk8ztoamnFWc5JnhYxLywKiO0",
    authDomain: "react-native-obj.firebaseapp.com",
    databaseURL: "https://react-native-obj.firebaseio.com",
    projectId: "react-native-obj",
    storageBucket: "react-native-obj.appspot.com",
    messagingSenderId: "46952955886"

};
let app;
if (!firebase.apps.length) {
    app = firebase.initializeApp(config);
}

export const db = app.database();  