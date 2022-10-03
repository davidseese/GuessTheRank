import React from 'react'
import * as firebase from '@firebase/app'
import '@firebase/auth'
const firebaseConfig = {

  apiKey: "AIzaSyAZYfRLJrBQi1IfO0Hepac6fwj9CD2VFuk",

  authDomain: "guess-the-rank.firebaseapp.com",

  projectId: "guess-the-rank",

  storageBucket: "guess-the-rank.appspot.com",

  messagingSenderId: "160438674178",

  appId: "1:160438674178:web:fed873e26653f139fa981b",

  measurementId: "G-K5D08DQTSQ"

};


const app = firebase.initializeApp(firebaseConfig)

export default app;