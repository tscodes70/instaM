
import './App.css';
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import NavigationBar from "./Components/navigationbar";
import PrivacyPolicy from './Components/privacyfooter';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { RequireAuth } from "./Authentication/RequireAuth";
import { useEffect, useState } from 'react';
import HashLoader from "react-spinners/HashLoader"
import Spline from '@splinetool/react-spline';
import Test from "./Pages/test"
import { auth } from './database/firebaseconfig';

//Check if user has existing cookie
// If yes, direct to login page with "welcome back user, enter password"
// If no, go to register page

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   },5000)
  // }, [])

  return (
    <div className="bgscene">
    <Spline scene="https://prod.spline.design/KIHUKysh-BGuqpT0/scene.splinecode" />
      {/* {
        loading ?
          <HashLoader size={30} color={"#F37A24"} loading={loading} />
          : */}
          <div>
            <NavigationBar/>
            <AnimatePresence>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/test" element={<Test />} />
                </Routes>
              </BrowserRouter>
            </AnimatePresence>
            <PrivacyPolicy />
          </div>
      {/* } */}
    </div>
  );
}

export default App;
