import React,{ Component } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Swiper from '../Swiper/Swiper'
import './HorizCard.css'

class HorizCard extends Component{
    // props.type -> textLeft, textRight
    state={
        showCard:false
    }
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    componentDidMount(){
        // if(this.state.showCard){
        //     return
        // }
        // console.log(this.myRef.current.clientHeight)
        let observer = new IntersectionObserver(entries=>{
            // console.log(+entries[0].intersectionRatio)
            entries.forEach(entry=>this.setState({showCard:entry.isIntersecting}))
        },{threshold:0.3});
        observer.observe(this.myRef.current)
    }

    render(){
        let textOrder=1
        let imgOrder=3
        if(this.props.type==='textRight'){
            textOrder=3; imgOrder=1
        }
        return(
            <Container ref={this.myRef}>
                <Row className='HorizCard' 
                    style={{
                        transform:this.state.showCard?'translateX(0)':'translateX(-100vw)'}} >
                    <Col className='order-2' lg={{order:textOrder,span:6}} id='HorizCard__text' >
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. 
                    </Col>
                    <Col className='order-1' lg={{order:imgOrder,span:6}}>
                        <Swiper 
                        autoplay={true}
                        width="100%"
                        imagesRoutes={this.props.imagesRoutes} 
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default HorizCard