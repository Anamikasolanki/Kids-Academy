import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import navmenu from '../../Json-api/Navmenu.json'

function BasicExample() {
  return (
    <Navbar expand="md" className="py-4">
      <Container>
        <Link to="/home" className='navbar-brand'>
          <img src="./image/logo.png" alt="logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              navmenu.map((item, index)=>{
                return (
                  <Link to={item.path} key={index} className={`nav-link mx-1 fw-bold ${item.color}`} style={{fontSize:20}}> {item.name} </Link>
                );
              })
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;