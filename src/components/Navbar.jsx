import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Mynav= function () {
  return (
    
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Browse</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Mynav;