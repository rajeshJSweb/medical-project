import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializeAuthenthication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthenthication;