/*
 * Created Date: Friday April 24th 2020
 * Author: Gurubalan Harikrishnan
 * Email-ID: gurubalan.work@gmail.com
 * -----
 * Copyright (c) 2020 Gurubalan Harikrishnan
 */
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">MovieDB</Navbar.Brand>
            <Nav className="mr-auto">
                {/* NOTE Since we are using React-bootstrap we have to pass in a prop to actually use the Link from react-router instead of react-bootstrap
                , we can also solve this by installing react-router-bootstrap */}
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
                <Nav.Link as={Link} to="/actors">Actors</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;