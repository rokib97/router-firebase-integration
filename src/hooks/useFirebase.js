import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import app from "../firebase.init";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const useFirebase = () => {
  const [user, setUser] = useState({});

  const signInwithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
      console.log(user);
    });
  };
  const signOutFromGoogle = () => {
    signOut(auth).then(() => {});
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);
  return { user, signInwithGoogle, signOutFromGoogle };
};

export default useFirebase;
