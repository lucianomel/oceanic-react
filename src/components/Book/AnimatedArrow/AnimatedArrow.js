
import './AnimatedArrow.scss'
import classes from '../Book.module.css'

const AnimatedArrow=props=>{
    return(
        <div className={classes.ClosedBook}
        id="ArrowWrapper">
          <input type="checkbox" id="animation1"/>
            <label htmlFor="animation1">
                <div className="arrow" onClick={props.toggleBooking} ></div>
            </label>
        </div>
    )
}
export default AnimatedArrow