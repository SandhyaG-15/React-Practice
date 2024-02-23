import React from 'react'
import { Container,  Navbar,Nav} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
function Header() {
  return (
    <header>
        <Navbar className='bg-primary justifycontent-center' expand="lg">
          <Container>
            <LinkContainer to='/'>
            <Navbar.Brand className='text-secondary fw-bold fs-2 text'>Bakers</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to='/Cart'>
                <Nav.Link className='text-secondary fw-medium fs-4 text'><i class="bi bi-cart-fill" style={{color:'#686dc3'}}></i> Cart </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                <Nav.Link href="/login" className='text-secondary fw-medium fs-4 text' ><i class="bi bi-person-fill-lock"  style={{color:'#686dc3'}}></i> Login</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
  )
}

export default Header