// import { Fragment } from "react"
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import {Link } from 'react-router-dom'
import { Fragment, useState } from 'react';
import BackDrop from '../Backdrop/Backdrop';


const MyNavbar=props=>{
    const [navState,setNavState]=useState({toggleMobileMenu:false})
    const toggleMobile=()=>{
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if(vw<992){
            const initialState=navState.toggleMobileMenu
            setNavState({toggleMobileMenu:!initialState})
        }
        console.log(vw)
    }
    return (
        <Fragment>
        <BackDrop show={navState.toggleMobileMenu} clicked={toggleMobile}/>
        <Navbar expand="lg" expanded={navState.toggleMobileMenu}>
                <Navbar.Brand href="/">Oceanic Propiedades</Navbar.Brand>
                <Navbar.Toggle onClick={toggleMobile} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link onClick={toggleMobile} as={Link} id='navLink' to="/departamentos">Departamentos</Nav.Link>
                    <Nav.Link onClick={toggleMobile} as={Link} id='navLink' to="#link">Proyectos</Nav.Link>
                    <Nav.Link onClick={toggleMobile} as={Link} id='navLink' to="#link">Promociones</Nav.Link>
                    <Nav.Link onClick={toggleMobile} as={Link} id='navLink' to="#link">FAQ</Nav.Link>
                    {/* <Nav.Link id='navLink' href="#link">Reserva hoy</Nav.Link> */}
                    </Nav>
                    {/* <Form inline id='search__form'>
                    <FormControl id='serach__input' 
                        type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" />
                    <Button id="search__btn">Search</Button>
                    </Form> */}
                    <div>
                        <Nav.Link className='navbar__LoginButton' onClick={toggleMobile} as={Link} id='navLink' to="/login">Login</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default MyNavbar