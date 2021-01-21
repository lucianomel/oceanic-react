import classes from './Author.module.css'

const Author=props=>{
    return(
        <div className={classes.Author}>
            <p className={classes.Firm}>@ {new Date().getFullYear()} Oceanic Propiedades LLC -- Website created by: Luciano Melhem</p>
        </div>
    )
}

export default Author