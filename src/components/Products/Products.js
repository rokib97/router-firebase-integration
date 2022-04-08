import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";
const auth = getAuth(app);
const Products = () => {
  //   const { user } = useFirebase();
  const [user] = useAuthState(auth);
  return (
    <div>
      <h2>Knock Knock Who is there: {user ? user.displayName : "Bhoot"}</h2>
    </div>
  );
};

export default Products;
