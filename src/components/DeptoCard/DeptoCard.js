import classes from "./DeptoCard.module.css";
import { Component } from "react";
import Swiper from "../UI/Swiper/Swiper";
import { Row,Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const initPath='/Images/Deptos'


class DeptoCard extends Component{
    render(){
        return(
            <Link to={'depto-details/'+this.props.depto._id} className={classes.NoStyledLink} >
                    <Row className={classes.Card}>
                        <Col lg={5} 
                            style={{display:'flex',alignItems:'center'}}
                            className={classes.SwiperWrapper}>
                            <Swiper width="100%" 
                            style={{display:'flex',alignItems:'center'}}
                            deptoCard
                            autoplay={false}
                            imagesRoutes={this.props.depto.images.map(img=>initPath+img.path)}/>
                        </Col>
                        <Col lg={7} className={classes.Card__TextBlock}>
                            <p className={classes.Card__Subtitle}>{this.props.depto.subtitle}</p>
                            <h4 className={classes.Card__Title}>{this.props.depto.title}</h4>
                            <p>{this.props.depto.introDescription}</p>
                            <div className={classes.Card__Bottom}>
                                <p className={classes.Card__Rating}>Rating: {this.props.depto.rating}/5</p>
                                <p className={classes.Card__Price}>$ {this.props.depto.price} USD</p>
                            </div>
                        </Col>
                    </Row>
                <hr></hr>
            </Link>
        )
    }
}
export default withRouter(DeptoCard)