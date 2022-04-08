// import useFirebase from "../../hooks/useFirebase";
import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
const auth = getAuth(app);

const LogIn = () => {
  let navigate = useNavigate();
  let location = useLocation();
  //   const { signInwithGoogle } = useFirebase();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const from = location?.state?.from?.pathname || "/";
  const handlGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <h1>Please Login</h1>
      <div style={{ margin: "20px" }}>
        {/* <button onClick={signInwithGoogle}>Google Sign In</button> */}
        <button onClick={handlGoogleSignIn}>Google Sign In</button>
      </div>
      <form>
        <input type="email" name="" id="" />
        <br />
        <input type="password" name="" id="" />
        <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
};

export default LogIn;
