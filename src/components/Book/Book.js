import 'react-dates/initialize'
import DatePicker from '../UI/DatePicker/DatePicker';
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{ Component,Fragment } from 'react';
import {  Form,Button } from 'react-bootstrap';
import classes from './Book.module.css'
import './Book.css'
import AnimatedArrow from './AnimatedArrow/AnimatedArrow';
import {CSSTransition} from 'react-transition-group'
class Book extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate:null,
            endDate:null,
            focusedInput:undefined,
            showSearch:false
        }
        this.toggleBooking=this.toggleBooking.bind(this)
    }
    toggleBooking(){
        // console.log('Booking button clicked')
        this.setState(prevState=>{
            return {showSearch:!prevState.showSearch}
        })
    }
    sendLandingSearchParams=()=>{
        const startDate= new Date(document.getElementById('start_date_id').value)
        const endDate=new Date(document.getElementById('end_date_id').value)
        const bookLocation=document.getElementById('book__sitio').value
        const bookGuests=document.getElementById('book__huespedes').value
        const searchParams={
            startDate:startDate,
            endDate:endDate,
            location:bookLocation,
            guests:bookGuests
        }
        this.props.loadLandingSearchParams(searchParams) //this redirects
    }
    loadDatesInBookState=dates=>{
        console.log(dates)
        return dates
    }
    render(){
        return(
            <div >
                <Form className={classes.Book}
                style={{transform:this.state.showSearch?'none':'translateX(0)'}} >
                    <Form.Row style={{display:'flex',alignItems:'center'}}>
                        {this.state.showSearch?
                        <Fragment>
                        <CSSTransition
                        in={true}
                        appear={true}
                        timeout={700}
                        classNames="translate" >
                            <div style={{display:'flex',alignItems:'center'}}>
                                <Form.Group style={{margin:'0 1rem'}}  controlId="book__sitio">
                                <Form.Control as="select">
                                    <option>Eliga una ubicacion</option>
                                    <option>Torices</option>
                                    <option>Cabrero</option>
                                    <option>Marbella</option>
                                    <option>El laguito</option>
                                </Form.Control>
                                </Form.Group>
                                <Form.Group style={{margin:0}} controlId="book__huespedes">
                                <Form.Control type="number" placeholder="Nro Huespedes" />
                                </Form.Group>
                                <DatePicker />
                                <Button onClick={this.sendLandingSearchParams} 
                                    style={{height:'2.5rem'}} variant="secondary">Ir</Button>
                            </div>
                        </CSSTransition>
                        </Fragment>
                        : null
                        }
                            <Form.Group style={{margin:0}}>
                                <div style={{display:'flex',alignItems:'center'}}>
                                    {this.state.showSearch?null:
                                    <p style={{margin:'0 0 0.5rem 1rem',color:'white',fontWeight:700}}>
                                        Reserva
                                    </p>
                                    }
                                    <AnimatedArrow toggleBooking={this.toggleBooking}/>
                                </div>
                            </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        )
    }
}

export default Book