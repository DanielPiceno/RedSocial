import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCp8adNf-oaYdszznwe_35nFU4Q-yBeJxo",
  authDomain: "unichat-bbc4f.firebaseapp.com",
  projectId: "unichat-bbc4f",
  storageBucket: "unichat-bbc4f.appspot.com",
  messagingSenderId: "109843533509",
  appId: "1:109843533509:web:a08ab863783156f1cf2aac",
  measurementId: "G-04YG4FE6GG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


  export const db = getFirestore(app);
  export const storage = getStorage(app);

  


