import React,{ Component } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './DatePicker.css'

class DatePicker extends Component{
    constructor(props){
        super(props)
        this.state={
            startDate:this.props.startDate,
            endDate:this.props.endDate
        }
    }
    componentDidUpdate(){
        if(this.state.endDate&&this.state.startDate){
            this.props.setSearchBarDates({
                startDate:this.state.startDate,
                endDate:this.state.endDate,
            })
        }
        if(!this.state.endDate&&!this.state.startDate){
            this.setState({startDate:this.props.startDate,endDate:this.props.endDate})
        }
    }
    render(){
        return(
            <div className='DatePicker_wrapper'>
            <DateRangePicker 
            isDayBlocked={this.props.isBlocked}
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="end_date_id" // PropTypes.string.isRequired,
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />
            </div>
        )   
    }
}

export default DatePicker