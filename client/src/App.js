import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SignUp from "./components/register";
import Login from "./components/login";
import Profile from "./components/profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./components/firebase";

function AuthLayout({ children }) {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">{children}</div>
    </div>
  );
}
function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/profile" />
              ) : (
                <AuthLayout>
                  <Login />
                </AuthLayout>
              )
            }
          />
          <Route
            path="/register"
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            }
          />
          <Route
            path="/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
