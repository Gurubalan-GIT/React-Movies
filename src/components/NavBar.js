/*
 * Created Date: Friday April 24th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">MovieDB</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
            <Nav.Link href="#pricing">Actors</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;