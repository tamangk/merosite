import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Merosite</Navbar.Brand>
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