import React, { useEffect, useState } from "react"
import "../App.css"
import { handleLogin } from "../handlers/apphandles";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";


export default function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (

      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Welcome Back</h3>
            <h5 className="Auth-form-desc">Enter your details to get sign in into your account!</h5>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="forgot-password text-right mt-2">
              <a href="/resetpassword">Having trouble signing in?</a>
            </p>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={(e) => handleLogin(e, email, password, navigate)}>
                Sign In
              </button>
            </div>
            <p className="register text-center mt-2">
              Don't have an account? <a href="/register">Create Here</a>
            </p>
          </div>
        </form>
      </div>

  )
}
