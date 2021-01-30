import {Form,Button, Container} from 'react-bootstrap'
import { Fragment, useState } from 'react'
import NavbarSpace from '../UI/Navbar/NavbarSpace/NavbarSpace'
import classes from './Login.module.css'
import axios from '../../axios'
import { useHistory } from "react-router-dom";


const Login = props=>{
    let history = useHistory();
    const [loginState,setLogin]=useState({rejectedLogin:false})
    const handleChange=event=>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const newState={...loginState,[name]: value}
        setLogin(newState);
    }
    const submitHandler=event=>{
        event.preventDefault()
        axios.post('/login',loginState)
        .then(res=>{
            console.log(res)
            history.push('/')
        })
        .catch(err=>{
            console.log(err.response)
            const newState={
                ...loginState,
                error:err.response.data.error,
                validationErrors:err.response.data.validationErrors
            }
            setLogin(newState)
        })
    }
    return(
    <Fragment>
        <NavbarSpace/>
        <Container className={classes.Login}>
            <h4>{loginState.error}</h4>
            {loginState.validationErrors?
            loginState.validationErrors.map(valErr=>
            <p key={valErr.msg}>{valErr.msg}</p>
            )
            :null}
            <Form onSubmit={submitHandler} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                    name='email' 
                    type="email"
                    placeholder="Enter email"
                    onChange={handleChange} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control 
                    name='password' 
                    type="password" 
                    placeholder="Password"
                    onChange={handleChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check 
                    name='keepLogin' 
                    type="checkbox" 
                    label="Keep loged in" 
                    defaultChecked
                    onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    </Fragment>
    )
}


export default Login