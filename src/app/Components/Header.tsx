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
                            <a>Blockchain Info</a>
                        </LinkContainer>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        )
    }
}
