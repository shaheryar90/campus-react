import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase' 

firebase.initializeApp({
  apiKey: "AIzaSyCSpCH3vaWJDzDsufFJqUgiodZzg-Dyo_M",
  authDomain: "campus-31118.firebaseapp.com",
  databaseURL: "https://campus-31118-default-rtdb.firebaseio.com",
  projectId: "campus-31118",
  storageBucket: "campus-31118.appspot.com",
  messagingSenderId: "728979771635",
  appId: "1:728979771635:web:b1f370d14e3abf39b12786",
  measurementId: "G-Q6ZPDT1VD6"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
