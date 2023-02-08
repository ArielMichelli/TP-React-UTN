// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyB_16MXqoeQh0Zp28LtJ-CMVF33oXHLmxY",
  authDomain: "tp-react-utn-ac0c6.firebaseapp.com",
  projectId: "tp-react-utn-ac0c6",
  storageBucket: "tp-react-utn-ac0c6.appspot.com",
  messagingSenderId: "723062603500",
  appId: "1:723062603500:web:b342d6986833d585846fc9",
  measurementId: "G-R8MYB6BP35"
};

// Initialize Firebase

const Firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebase);

console.log(Firebase)
export default Firebase;