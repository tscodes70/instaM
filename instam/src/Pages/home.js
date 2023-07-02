import React from "react"
import "../App.css"
import { handleLogout } from "../handlers/apphandles"
import { useNavigate } from "react-router-dom"
import ChatList from "../Components/chatlist"
import { auth } from "../database/firebaseconfig"

export default function Home() {
  const navigate = useNavigate();

  return (

    <div className="home">
      <ChatList/>
      <div className="home-container">
        <div className="home-div">
          <p className="welcome-msg">
            Start A Chat
          </p>
          <div className="text-center">

          </div>
          <div className="home-btn-div text-center">
            <div>
              <button type="submit" className="btn btn-primary" onClick={(e) => handleLogout(e, navigate)}>Logout</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}