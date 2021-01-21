import { Fragment } from "react"
import "./OnOf.scss"

const OnOff=props=>(
    <Fragment>
        <div class="mid" >
            <label class="rocker rocker-small">
            <input type="checkbox" onClick={()=>props.clicked('Pileta')} />
            <span class="switch-left">Si</span>
            <span class="switch-right">No</span>
            </label>
        </div> 
    </Fragment>
)

export default OnOff