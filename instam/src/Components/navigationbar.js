import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Resources/logo.js';
import {useNavigate} from 'react-router-dom';
import UserProfile from '../Closures/UserProfile.js';

export default function NavigationBar(props) {
  console.log("nav");

  return (
    <>
      <Navbar className='nav-color' variant='light'>
        <Container>
          <Navbar.Brand href="/" className='nav-brand'>
            <Logo/>
            Instant Messaging Project
          </Navbar.Brand>
          {UserProfile ? (<p>{UserProfile.getName()}</p>):(<></>)}
        </Container>
      </Navbar>
    </>
  );
}
