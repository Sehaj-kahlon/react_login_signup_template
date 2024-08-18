import React from "react";
import "./components.css";
import img from "../assets/google.png";
import { auth, db } from "./firebase";
import { Button } from "antd";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
function SigninWithGoogle() {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      console.log(result);
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          createdAt: new Date(),
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        await delay(2000);
        window.location.href = "/profile";
      }
    });
  };
  return (
    <div>
      <p className="continue-p">--Or continue with--</p>
      <Button onClick={googleLogin} className="googleSignIn">
        <img src={img} alt="googleimage" width={"60%"}></img>
      </Button>
    </div>
  );
}

export default SigninWithGoogle;
