import { Container,Col,Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import classes from "./Footer.module.css"


const Footer=props=>{
    return(
        <div className={classes.FooterWrapper}>
            <Container >
                <Row>
                    <Col lg={4} className={classes.FooterColumn}>
                        <h4 style={{fontWeight:'300'}}>Sobre Nosotros</h4>
                        <hr></hr>
                        <p>Alfredo Melhem</p>
                        <p>Ivana Luraschi</p>
                        <NavLink to="/nosotros">Mas informacion sobre nosotros</NavLink>
                    </Col>
                    <Col lg={4} className={[classes.FooterColumn,classes.FooterColumnMiddle].join(' ')} >
                        <h4 style={{fontWeight:'300'}}>Ponerte en Contacto</h4>
                        <hr></hr>
                        <p>+(54)11 6441 3184</p>
                        <p>oceanicpropiedades@gmail.com</p>
                        <p>dasdasdasda</p>
                    </Col>
                    <Col lg={4} className={classes.FooterColumn}>
                        <h4 style={{fontWeight:'300'}}>Visitanos</h4>
                        <hr></hr>
                        <p>Carrera 4 # 46A – 29, Apto. 2408, Cartagena de Indias, Colombia</p>
                        <a href='https://www.google.com.ar/maps/search/edificio+cabrero+marina+club/@10.4322117,-75.5442461,1427m/data=!3m1!1e3?hl=es'
                            target='_blank'>
                            Indicaciones para llegar
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    )   
}

export default Footer