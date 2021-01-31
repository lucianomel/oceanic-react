import { Fragment } from "react"
import "./OnOf.scss"

const OnOff=props=>(
    <Fragment>
        <div className="mid" >
            <label className="rocker rocker-small">
            <input 
                type="checkbox" 
                checked={props.checked} 
                onClick={()=>props.clicked(props.onoffParam)}
                // Adding onchange to get rid of warning on chrome console
                onChange={()=>{}} /> 
            <span className="switch-left">Si</span>
            <span className="switch-right">No</span>
            </label>
        </div> 
    </Fragment>
)

export default OnOff