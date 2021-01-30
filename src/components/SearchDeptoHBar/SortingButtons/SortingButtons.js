import { Fragment } from "react"
import { Button } from "react-bootstrap"
import classes from './SortingButtons.module.css'


const SortingButtons=props=>{
    const removeActiveClassOtherBtn=btn=>{
        btn.parentElement.childNodes.forEach(node=>{node.classList.remove(classes.active)})
    }
    const chooseSorting=(event,sortingArr)=>{
        const btn=event.target
        removeActiveClassOtherBtn(btn)
        btn.classList.toggle(classes.active)
        props.loadDeptos(sortingArr)
    }
    return(
    <Fragment>
        <h6 className={classes.SortBy}>Ordenar por:</h6>
        <div style={{padding:'0 0.5rem'}}>
            {/* TO IMPLEMENT LATER */}
            {/* <Button 
                onClick={(event)=>chooseSorting(event)}
                variant="dark" style={{margin:'0.3rem'}}
                >Recomendados</Button> */} 
            <Button 
                onClick={(event)=>chooseSorting(event,['rating'])}
                variant="dark" style={{margin:'0.3rem'}}
                >Rating</Button>
            <Button 
                onClick={(event)=>chooseSorting(event,['price','lower'])}
                variant="dark" style={{margin:'0.3rem'}}
                >$ mas bajo</Button>
            <Button 
                onClick={(event)=>chooseSorting(event,['price','higher'])}
                variant="dark" style={{margin:'0.3rem'}}
                >$ mas alto</Button>
            <Button 
                onClick={(event)=>chooseSorting(event,['createdAt'])}
                variant="dark" style={{margin:'0.3rem'}}
                >Nuevos arribos</Button>
        </div>
    </Fragment>
    )
}

export default SortingButtons