import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { Form, Input } from "antd";
import { toast } from "react-toastify";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleRegister = async (e) => {
    const extractErrorMessage = (errorMsg) => {
      const errorMap = {
        "auth/email-already-in-use": "Email already in use",
        "auth/weak-password": "Password should be at least 6 characters",
        "auth/missing-email": "Please enter email",
        "auth/invalid-email": "Invalid Email",
      };
      const match = errorMsg.match(/\(([^)]+)\)/);
      const errorCode = match ? match[1] : null;

      return errorMap[errorCode] || errorMsg;
    };
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User Registered Successfully!!");
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo: "",
          createdAt: new Date(),
        });
      }
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
      await delay(2000);
      window.location.href = "/profile";
    } catch (error) {
      console.log(error.message);
      const errorMessage = extractErrorMessage(error.message);
      toast.error(errorMessage, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div>
      <Form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <Input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <Input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <Input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <Input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered? <a href="/login">Login</a>
        </p>
      </Form>
    </div>
  );
}

export default SignUp;
