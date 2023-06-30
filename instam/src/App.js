
import './App.css';
import Login from "./Pages/login"
import Register from "./Pages/register"
import Home from "./Pages/home"
import Start from "./Pages/start"
import NavigationBar from "./navigationbar"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { RequireAuth } from "./Authentication/RequireAuth";


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
            <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/start" element={<Start />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>

      </AnimatePresence>
    </div>
  );
}

export default App;
