import React from 'react'

import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">EShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Nav.Link href="/cart">
                                <i className="fas fa-shopping-cart"></i>Cart
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <i className="fas fa-user"></i>Login
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <i className="fas fa-phone-volume"></i>Contacts
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
