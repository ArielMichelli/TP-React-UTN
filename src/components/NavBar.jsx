import { Container, Navbar, Nav } from 'react-bootstrap';

import { Link } from "react-router-dom";

function NavBarPro() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="justify-content-center">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="../../public/carrito-de-compras.png" alt=""
              width="40"
              height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-center mt-3 mb-3">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/productos">Products</Nav.Link>
              <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBarPro;
