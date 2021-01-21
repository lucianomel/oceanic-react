import classes from "./SearchDeptoHBar.module.css";
import React,{ Component } from "react";
import {Button,Form }from 'react-bootstrap'
import InputRange from 'react-input-range';
import ReactDOM from 'react-dom';
import 'react-input-range/lib/css/index.css'
import OnOff from "../UI/OnOff/OnOff";
import ServicesTags from "../ServicesTags/ServicesTags";

class SearchDeptoHBar extends Component{
    constructor(props) {
        super(props);
     
        this.state = {
            value: { min: 200, max: 500 },
            services:{
                Aire_acondicionado:false,
                Wifi:false,
                Desayuno:false,
                Cocina:false,
                Parking:false,
                bano_privado:false,
                Lavarropas:false,
                Frente_a_la_playa:false,
                Gimnasio:false,
                Seguridad_24_hr:false,
                Calefaccion:false,
                Pileta_propia:false,
                Accesibilidad_silla_ruedas:false,
                Pileta:false
            },
            location:'',
        };
    }
    toggleService=serviceName=>{
        let servicesState={...this.state.services}
        servicesState[serviceName]=!servicesState[serviceName]
        this.setState({services:servicesState})
    }
    togglePool=()=>{
        const currentPoolState=this.state.pool
        this.setState({services:{pool:!currentPoolState}})
    }
    render(){
        return(
            <div className={classes.SerchHBar}>
                <h4 className={classes.SerchHBar__Title}>Opciones de busqueda</h4>
                <div className={classes.Block}>
                    <h6 className={classes.SortBy}>Ordenar por:</h6>
                    <div style={{padding:'0 0.5rem'}}>
                        <Button variant="dark" style={{margin:'0.3rem'}}>Recomendados</Button>
                        <Button variant="dark" style={{margin:'0.3rem'}}>Rating</Button>
                        <Button variant="dark" style={{margin:'0.3rem'}}>$ mas bajo</Button>
                        <Button variant="dark" style={{margin:'0.3rem'}}>$ mas alto</Button>
                        <Button variant="dark" style={{margin:'0.3rem'}}>Nuevos arribos</Button>
                    </div>
                </div>
                <div className={classes.Block}>
                    <h6 className={classes.PriceRange}>Renta mensual</h6>
                    <div className={classes.Slider}>
                    <InputRange
                        maxValue={2000}
                        minValue={200}
                        value={this.state.value}
                        onChange={value => this.setState({ value })} />
                    </div>
                </div>
                <div className={classes.Block}>
                    <h6 className={classes.Guests}>
                        Nro huespedes
                        <span>
                            <input type='number' placeholder='1' min='1' />
                        </span>
                    </h6>
                </div>
                <div className={classes.Block}>
                    <div className={classes.Location}>
                        <h6 >Ubicacion</h6>
                        <Form.Control size="sm" as="select">
                            <option>Cabrero</option>
                            <option>Marbella</option>
                            <option>Torices</option>
                            <option>Bocagrande</option>
                        </Form.Control>
                    </div>
                </div>
                <div className={classes.Block}>
                    <div className={classes.Inline}>
                        <h6 className={classes.Pool}>Pileta</h6>
                        <OnOff clicked={this.toggleService}/>
                    </div>
                </div>
                <div className={classes.Block}>
                    <h6 className={classes.Amenities}>Añade Filtros</h6>
                    <ServicesTags toggleService={this.toggleService} />
                </div>
                <div className={classes.Block}>
                    <h6 className={classes.Guests}>Detail search</h6>
                </div>
            </div>
        )
    }
}

export default SearchDeptoHBar