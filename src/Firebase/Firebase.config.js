// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyD5rpPvU_egMh2TDISOFQuZMkWdyBaJQz4",
//   authDomain: "genius-car-6506b.firebaseapp.com",
//   projectId: "genius-car-6506b",
//   storageBucket: "genius-car-6506b.appspot.com",
//   messagingSenderId: "1004714704891",
//   appId: "1:1004714704891:web:74ebd954cd5c38de7b555e"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;
