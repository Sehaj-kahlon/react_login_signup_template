import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const extractErrorMessage = (errorMsg) => {
    const errorMap = {
      "auth/invalid-credential": "Invalid credentials",
      "auth/invalid-email": "Invalid Email",
    };
    const match = errorMsg.match(/\(([^)]+)\)/);
    const errorCode = match ? match[1] : null;

    return errorMap[errorCode] || errorMsg;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      toast.success("User logged in Successfully", {
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
      <form>
        <h3>Login</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          New user? <a href="/register">Register Here</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
