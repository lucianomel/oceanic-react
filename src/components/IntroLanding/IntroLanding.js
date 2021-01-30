import { Fragment } from "react"
import { Col,  Row } from "react-bootstrap"
import classes from './IntroLanding.module.css'

const introLanding=props=>{
    return (
        <Fragment>
                <Row style={{margin:'2rem 0'}}>
                    <Col lg={{span:5}} className={classes.TextBox}>
                        <h2 className={classes.Title}>Cartagena, el mejor lugar para quedarse y para veranear</h2>
                        <p className={classes.Text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit id mi a maximus. Nam dictum imperdiet tellus, ut vestibulum erat semper eu. Duis malesuada erat sed <strong >ante tincidunt facilisis. Pellentesque augue nulla, pellentesque eget tortor nec, venenatis elementum est. Etiam tincidunt metus quis tincidunt sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus.</strong> Ut quis ligula consequat, blandit nunc nec, vehicula ante. Etiam urna dui, sagittis ac bibendum at, condimentum eu ligula. Sed varius egestas libero, ut sodales justo
                        </p>
                    </Col>
                    <Col lg={{span:7}} className={classes.ImgWrapper}>
                        <img className={classes.Image} src='http://picsum.photos/id/2/500/300' alt='Intro Landing img' ></img>
                    </Col>
                </Row>            
        </Fragment>
    )
}
export default introLanding