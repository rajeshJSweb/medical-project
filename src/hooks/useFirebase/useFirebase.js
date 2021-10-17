import initializeAuthenthication from "../../Firebase/Firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthenthication();

const useFirebase = () => {
    
    const [user, setUser] = useState({});

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(result.user);
            })
            .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    },[])

    const logOut = () => {
        signOut(auth)
            .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;