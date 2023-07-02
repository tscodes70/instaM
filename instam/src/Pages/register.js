import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleRegister } from '../handlers/apphandles';
import Spline from '@splinetool/react-spline';

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cfmpassword, setCfmPassword] = useState("");

  return (
    <div className="bgscene">
      <Spline scene="https://prod.spline.design/KIHUKysh-BGuqpT0/scene.splinecode" />
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Confirm password"
                onChange={(e) => setCfmPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" onClick={(e) => handleRegister(e, username, email, password, cfmpassword, navigate)}>
                Register
              </button>
            </div>
            <p className="register text-center mt-2">
              Have an account? <a href="/login">Sign In Here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}