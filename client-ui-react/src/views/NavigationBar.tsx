import React from 'react';
import { Navbar,Button, Form, FormControl, Nav} from 'react-bootstrap';
import NavBarMenuLink from '../components/NavBarMenuLink';
import './navigationbar.css';
export default function NavigationBar() {
    return (
        <>
        <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand><NavBarMenuLink linkto="/" text="Code Blocks"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavBarMenuLink linkto="/mainpage" text="Code Snippets"/>
            <NavBarMenuLink linkto="/addnewentry" text="Add"/>
            <NavBarMenuLink linkto="/randomurl" text="Randomurl"/>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </>
    )
}