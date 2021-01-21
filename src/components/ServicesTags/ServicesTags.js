import classes from "./ServicesTags.module.css";
import { Component } from "react";
import {Button} from 'react-bootstrap'

class ServicesTags extends Component{
    state={
        extended:false
    }
    fetchServicesFields(){
        return [
            'Aire acondicionado',
            'Wifi',
            'Desayuno',
            'Cocina',
            'Parking',
            'bano privado',
            'Lavarropas',
            'Frente a la playa',
            'Gimnasio',
            'Seguridad 24 hr',
            'Calefaccion',
            'Pileta propia',
            'Accesibilidad silla ruedas'
        ]
    }
    moreServices=()=>{
        this.setState({extended:true})
    }
    selectedService=(service)=>{
        const parsedServ=service.replaceAll(' ','_')
        this.props.toggleService(parsedServ)
        const btn=document.getElementById(service)
        if(!btn.classList.contains(classes.service__selected)){
            btn.classList.add(classes.service__selected)
        }else{
            btn.classList.remove(classes.service__selected)
        }
    }
    render(){
        return(
            <div className={classes.ServicesTags__options}>
                <ul>
                    {this.fetchServicesFields().map((service,index)=>{
                        if(index<5||this.state.extended){
                            return <Button variant="dark" 
                            key={service}
                            id={service}
                            onClick={this.selectedService.bind(this,service)} 
                            style={{margin:'0.3rem'}}>
                                {service}
                            </Button>
                        }
                    })}
                    {this.state.extended?null:<a 
                        className={classes.ExtendLink} 
                        onClick={this.moreServices}>
                            More
                        </a>}
                </ul>
            </div>
        )
    }
}

export default ServicesTags