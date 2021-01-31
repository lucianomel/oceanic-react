import classes from './SearchParam.module.css'

const SearchParam=props=>{
    let caption
    switch (props.param){
        case 'dorms':
            caption='Dormitorios'
        break;
        case 'bathrooms':
            caption='Baños'
        break;
        case 'guests':
            caption='Huespedes'
        break;
    }
    return(
        <div className={classes.Block}>
            <h6 className={classes.InnerBlock}>
                Nro {caption}
                <span>
                    <input 
                        id={props.param}
                        value={props.value}
                        type='number' min='1'
                        onChange={(event)=>props.changeInputHandler(event,props.param)}
                         />
                    <p className={classes.IndiferentCheckbox}>
                        Indiferente:
                        <input 
                            style={{margin:0}}
                            type='checkbox' 
                            onClick={()=>props.disableInputHandler(props.param)}/>
                    </p>
                </span>
            </h6>
        </div>
    )
}

export default SearchParam