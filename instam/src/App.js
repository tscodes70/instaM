import logo from './logo.svg';
import './App.css';
import Login from "./login"
import Register from "./register"
import Home from "./home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Check if user has existing cookie
// If yes, direct to login page with "welcome back user, enter password"
// If no, go to register page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
