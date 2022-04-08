import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
// import useFirebase from "../../hooks/useFirebase";
import "./Header.css";
const auth = getAuth(app);

const Header = () => {
  //   const { user, signOutFromGoogle } = useFirebase();
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Order</Link>
        <Link to="/register">Register</Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>SignOut</button>
        ) : (
          <Link to="/login">LogIn</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
