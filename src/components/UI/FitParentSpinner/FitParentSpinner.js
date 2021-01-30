import {Spinner} from 'react-bootstrap'

const ScreenSpinner=porps=>{

    return(
        <Spinner 
            animation="border" role="status"
            style={{
            width:'100vh',
            height:'100vh'
            }}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default ScreenSpinner