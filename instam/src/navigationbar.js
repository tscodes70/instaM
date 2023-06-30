import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.js';
import './App.css';
import {useNavigate} from 'react-router-dom';
import { auth } from './database/firebaseconfig.js';

export default function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <Logo/>
            Instant Messaging Project
          </Navbar.Brand>
          {auth.currentUser ? (<p>{auth.currentUser.displayName}</p>):(<></>)}
        </Container>
      </Navbar>
    </>
  );
}
