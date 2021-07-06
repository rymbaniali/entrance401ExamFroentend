import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'

export class Footer extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">&copy;2021-Reem Bani Ali  </Navbar.Brand>



                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer