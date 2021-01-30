import { Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { faHandPointUp,faHandPointDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './DeptoReviews.module.css'

const DeptoReviews=props=>{

    return(
        <Row className={classes.ReviewsBox}>
        {props.reviews.map(rev=>{
            return (
                <Col md={6} className={classes.ReviewCard}>
                    <h4>Guest: {rev.author[0].name}</h4>
                    <p className={classes.ReviewDate}>{new Date(rev.createdAt).toDateString()}</p>
                    <p>Rating: {rev.rating}/5</p>
                    <p><FontAwesomeIcon icon={faHandPointUp}/> {rev.comment.pro}</p>
                    <p><FontAwesomeIcon icon={faHandPointDown}/> {rev.comment.cons}</p>
                </Col>
            )
        })}
        </Row>
    )
}

export default DeptoReviews