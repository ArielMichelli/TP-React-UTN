import Firebase from 'firebase/compat/app';

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

Firebase.initializeApp(firebaseConfig);

export default Firebase;