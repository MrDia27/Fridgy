import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

 const firebaseConfig = {
  apiKey: "AIzaSyCbJ-p3_NX97-YvDS-b0Bc_CSfqVtsoJss",
  authDomain: "fridgy-82c4d.firebaseapp.com",
  databaseURL: "https://fridgy-82c4d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fridgy-82c4d",
  storageBucket: "fridgy-82c4d.appspot.com",
  messagingSenderId: "680060508246",
  appId: "1:680060508246:web:f32f8b354cfb69d9d343f7"
};

const fireBaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(fireBaseApp);

