
import './App.css';
import Login from "./login"
import Register from "./register"
import Home from "./home"
import NavigationBar from "./navigationbar"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


//Check if user has existing cookie
// If yes, direct to login page with "welcome back user, enter password"
// If no, go to register page

function App() {
  return (
    <div>
      <NavigationBar />
      <AnimatePresence>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

          </AnimatePresence>
    </div>
  );
}

export default App;
