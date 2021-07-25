import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Merosite</Navbar.Brand>
                    <div>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#project">Projects</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>   
    )
}

export default Header