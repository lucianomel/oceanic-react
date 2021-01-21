// import { Fragment } from "react"
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { useState } from 'react';
import { useEffect } from 'react';

const MyNavbar=props=>{
    return (<Navbar expand="lg">
                <Navbar.Brand href="/">Oceanic Propiedades</Navbar.Brand>
                <Navbar.Toggle onClick={props.toggleMobileMenu} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link id='navLink' href="/departamentos">Departamentos</Nav.Link>
                    <Nav.Link id='navLink' href="#link">Proyectos</Nav.Link>
                    <Nav.Link id='navLink' href="#link">Promociones</Nav.Link>
                    <Nav.Link id='navLink' href="#link">FAQ</Nav.Link>
                    {/* <Nav.Link id='navLink' href="#link">Reserva hoy</Nav.Link> */}
                    </Nav>
                    <Form inline id='search__form'>
                    <FormControl id='serach__input' 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" />
                    <Button id="search__btn">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default MyNavbar