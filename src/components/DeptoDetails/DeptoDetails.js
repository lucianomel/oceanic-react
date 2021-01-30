import React, { Fragment, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Gallery from 'react-grid-gallery';
import moment from 'moment'

import NavbarSpace from '../UI/Navbar/NavbarSpace/NavbarSpace'
import axios from '../../axios'
import classes from './DeptoDetails.module.css'
import {getImages} from './DeptoDetailsImages/DeptoDetailsImages'
import {MapContainer} from './Maps/Maps'
import DatePicker from '../UI/DatePicker/DatePicker'
import DeptoReviews from './DeptoReviews/DeptoReviews';

let IMAGES

const DeptoDetails=props=>{
    const [prevState,setState]=useState({loadedDepto:null,loading:true})
    
    const getDepto=()=>{
        const deptoId=props.match.params.deptoId
        axios.get('/details-depto/'+deptoId)
        .then(res=>{
            console.log(res)
            IMAGES=getImages(res.data.deptoAndReviews.depto.images)
            // console.log(IMAGES)
            setState({loadedDepto:res.data.deptoAndReviews.depto,loadedReviews:res.data.deptoAndReviews.reviews})
        })
    }
    useEffect(()=>{
        if(prevState.loading){
            setState({...prevState,loading:false})
            getDepto()
        }
    },)
    const isBlocked=day=>{
        // console.log(day)
        const dates=prevState.loadedDepto.reservationDates
        let result=false
        for(let i=0; i<dates.length&&!result;i++){
            result=moment(day).isBetween(dates[i].startDate,dates[i].endDate)
        }
        return result
    }
    return(
        <div>
            <NavbarSpace/>
                {prevState.loadedDepto?
            <Container>
                <Row>
                    <Col md={12} className={classes.AlignLeft}>
                    <h2 className={classes.LightFont}>{prevState.loadedDepto.title}</h2>
                    <p className={classes.Subtitle}>
                        {prevState.loadedDepto.subtitle} - 
                        Ubicacion: {prevState.loadedDepto.location} - 
                        Rating: {prevState.loadedDepto.rating}/5
                    </p>
                    <div className={classes.ImageGrid}>
                    <Gallery enableImageSelection={false} backdropClosesModal={true} images={IMAGES}/>
                    </div>
                    </Col>
                    <Col md={12} className={classes.AlignLeft} >
                        <br/>
                        <div>
                            <h4>Acerca de: </h4>
                            <p>{prevState.loadedDepto.fullDescription}</p>
                        </div>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col>
                        <h2 className={[classes.LightFont,classes.AlignLeft].join(' ')}>
                            Detalles
                        </h2>
                        <br/>
                        <div className={classes.DetailsBoxWrapper}>
                            <div className={classes.DetailBox} >
                                <p><strong>Servicios: </strong>
                                {prevState.loadedDepto.amenities.map((serv,index)=>{
                                    if(index===prevState.loadedDepto.amenities.length-1){
                                        return serv+'.'
                                    }
                                    return serv+', '
                                })}
                                </p>
                                <p><strong>Ambientes: </strong>
                                {prevState.loadedDepto.rooms.map((room,index)=>{
                                    if(index===prevState.loadedDepto.rooms.length-1){
                                        return room+'.'
                                    }
                                    return room+', '
                                })}
                                </p>
                                <p><strong>Direccion: </strong> {prevState.loadedDepto.address}</p>
                                {prevState.loadedDepto.creator?
                                    <p><strong>Contacto: </strong>
                                        telefono: {prevState.loadedDepto.creator.phoneNumber},   
                                        email: {prevState.loadedDepto.creator.email},  
                                        nombre: {prevState.loadedDepto.creator.name}. 
                                    </p>
                                :null}
                                <Row >
                                    <Col lg={6} style={{display:'flex',alignItems:'center',
                                        justifyContent:'center'}}>
                                        <DatePicker isBlocked={isBlocked} />
                                    </Col>
                                    <Col lg={6} style={{display:'flex',justifyContent:'center'}}>
                                        <Button className={classes.ReservarBtn} >Reservar</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr/>
                {prevState.loadedReviews[0]._id? 
                    <Fragment>
                        <h2 className={[classes.LightFont,classes.AlignLeft].join(' ')} >Reviews</h2>
                        <DeptoReviews reviews={prevState.loadedReviews} />
                    </Fragment>
                :null}
                <hr/>
                {prevState.loadedDepto.iframeLink?
                <Row>
                     <Col>
                        <h2 className={[classes.LightFont,classes.AlignLeft].join(' ')}>
                            Ubicacion
                        </h2>
                        <MapContainer iframeLink={prevState.loadedDepto.iframeLink} />
                    </Col>
                </Row>
                :null
                }
            </Container>
            :<h2>Not found</h2>}
        </div>
    )
}

export default DeptoDetails