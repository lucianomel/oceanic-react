import classes from "./JumboLink.module.css"
import {Link, withRouter} from 'react-router-dom'

// to={props.match.url+'/'}

const JumboLink=props=>{
    return(
            <Link to={props.match.url+props.linkName} 
                className={classes.JumboLink}>
                    <img className={classes.JumboImage} 
                    src={'/Images/'+props.imgRoute}
                    alt={props.linkName} />
                <h2 className={classes.JumboTitle} >{props.text}</h2>
            </Link>
    )
}

export default withRouter(JumboLink)