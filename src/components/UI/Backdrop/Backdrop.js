import classes from './Backdrop.module.css'
import Proptypes from 'prop-types'

const backDrop =props=>(
    props.show? <div onClick={props.clicked} className={classes.Backdrop}></div> : null
)

backDrop.propTypes={
    show:Proptypes.bool,
    clicked:Proptypes.func
}

export default backDrop