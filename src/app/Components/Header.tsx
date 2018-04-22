import * as React from 'react';
import { Route} from 'react-router';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, PageHeader } from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import {Link } from 'react-router-dom';

export class Header extends React.Component {
    render () {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/">
                            <a href="#">Blockchain Info</a>
                        </LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <LinkContainer to="/blocks">
                        <NavItem eventKey={1}>Blocks</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>)

    }
}
