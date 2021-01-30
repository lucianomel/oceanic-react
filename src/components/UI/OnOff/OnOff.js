import { Fragment } from "react"
import "./OnOf.scss"

const OnOff=props=>(
    <Fragment>
        <div className="mid" >
            <label className="rocker rocker-small">
            <input type="checkbox" onClick={()=>props.clicked('Pileta')} />
            <span className="switch-left">Si</span>
            <span className="switch-right">No</span>
            </label>
        </div> 
    </Fragment>
)

export default OnOff