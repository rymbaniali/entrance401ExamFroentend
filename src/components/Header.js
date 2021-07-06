import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Cocktial App</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/fav">Favorites</Nav.Link>

                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
