import React from "react";
import useFirebase from "../../hooks/useFirebase";

const LogIn = () => {
  const { signInwithGoogle } = useFirebase();
  return (
    <div>
      <h1>Please Login</h1>
      <div style={{ margin: "20px" }}>
        <button onClick={signInwithGoogle}>Google Sign In</button>
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
