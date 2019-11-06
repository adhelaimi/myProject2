import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import './comp.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navigation extends Component {
    render() {
        return (
            <div>
        <Navbar variant="dark" className="navi">
            <Navbar.Brand href="#home">ReadME</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Nav.Link href="#Books">Books</Nav.Link>
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#About">Contact</Nav.Link>
         </Nav>
        </Navbar>
            </div>
        )
    }
}
