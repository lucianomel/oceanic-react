import classes from "./DeptoCard.module.css";
import { Component } from "react";
import Swiper from "../UI/Swiper/Swiper";
import { Row,Col } from "react-bootstrap";

const initPath='/Images/Deptos'

const CalcRating=(comments)=>{
    let res=0
    comments.forEach(coment=>{
        res+=coment.rating
    })
    return (res/comments.length).toFixed(2)
}

class DeptoCard extends Component{
    render(){
        return(
            <div className={classes.DeptoCard}>
                <Row>
                    <Col lg={5} style={{display:'flex',alignItems:'center'}}>
                        <Swiper width="100%" 
                        style={{display:'flex',alignItems:'center'}}
                        deptoCard
                        autoplay={false}
                        imagesRoutes={this.props.depto.images.map(route=>initPath+route)}/>
                    </Col>
                    <Col lg={7} className={classes.Card__TextBlock}>
                        <p className={classes.Card__Subtitle}>{this.props.depto.subtitle}</p>
                        <h4 className={classes.Card__Title}>{this.props.depto.title}</h4>
                        <p>{this.props.depto.introDescription}</p>
                        <div className={classes.Card__Bottom}>
                            <p className={classes.Card__Rating}>Rating: {CalcRating(this.props.depto.reviews)}/5</p>
                            <p className={classes.Card__Price}>$ {this.props.depto.price} USD</p>
                        </div>
                    </Col>
                </Row>
                <hr></hr>
            </div>
        )
    }
}
export default DeptoCard