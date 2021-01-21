import 'react-dates/initialize'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component,Fragment } from 'react';
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
            showSearch:false
        }
        this.toggleBooking=this.toggleBooking.bind(this)
    }
    toggleBooking(){
        console.log('Booking button clicked')
        this.setState(prevState=>{
            return {showSearch:!prevState.showSearch}
        })
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
                                <Form.Control type="text" placeholder="Sitio" />
                                </Form.Group>
                                <Form.Group style={{margin:0}} controlId="book__huespedes">
                                <Form.Control type="number" placeholder="Nro Huespedes" />
                                </Form.Group>
                                <DateRangePicker 
                                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                                />
                                <Button style={{height:'2.5rem'}} variant="secondary">Ir</Button>
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