import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import SignUp from "./components/register";
function App() {
  return (
    <Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
