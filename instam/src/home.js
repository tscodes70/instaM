import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
    const redirLogin = () => {
      navigate('/login');
    };

    const redirRegister = () =>{
      navigate('/register');
    };

  return (
    <html className="home-html">
    <div className="home">

      <div className="home-container">
          <div className="home-div">
          <p className="welcome-msg">
            Let's get started
          </p>
          <div className="home-btn-div text-center">
            <button className="home-btn" onClick={redirLogin}>
              Login
            </button>
            <button className="home-btn" onClick={redirRegister}>
              Register
            </button>
            </div>
          </div>
      </div>

    </div>
    </html>
  );
}
