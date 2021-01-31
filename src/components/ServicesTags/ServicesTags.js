import classes from "./ServicesTags.module.css";
import { Component } from "react";
import {Button} from 'react-bootstrap'

class ServicesTags extends Component{
    fetchServicesFields(){
        const services=this.props.initServicesState
        const servicesArr=[]
        for (let serviceName in services){
            const parserServiceName=serviceName.replaceAll('_',' ')
            
            servicesArr.push(parserServiceName)
        }
        return servicesArr
        // return [
        //     'Aire acondicionado',
        //     'Wifi',
        //     'Desayuno',
        //     'Cocina',
        //     'Parking',
        //     'bano privado',
        //     'Lavarropas',
        //     'Frente a la playa',
        //     'Gimnasio',
        //     'Seguridad 24 hr',
        //     'Calefaccion',
        //     'Pileta propia',
        //     'Accesibilidad silla ruedas',
        //     'Heladera'
        // ]
    }
    componentDidMount(){
        this.colorDefaultSelected(this.props.initServicesState)
    }
    componentDidUpdate(){
        this.colorDefaultSelected(this.props.initServicesState)
    }
    colorDefaultSelected=initServices=>{
        for(let serviceName in initServices){
            if(initServices[serviceName]&&serviceName!=this.props.onoffParam){
                const parsedServiceName=serviceName.replaceAll('_',' ')
                // console.log(parsedServiceName)
                const btn=document.getElementById(parsedServiceName)
                btn.classList.add(classes.service__selected)
            }
        }
        // arrServices.forEach(
        //     service=>{
        //         const btn=document.getElementById(service)
        //         btn.classList.add(classes.service__selected)
        //     }
        // )
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
                        // if(index<5||this.state.extended){
                            return <Button variant="dark" 
                            hidden={index>=5&&!this.props.extended?true:false}
                            key={service}
                            id={service}
                            onClick={this.selectedService.bind(this,service)} 
                            style={{margin:'0.3rem'}}>
                                {service}
                            </Button>
                        // }
                        // return null;
                    })}
                    <p 
                    className={classes.ExtendLink} 
                    onClick={this.props.toggleExtendedServices}>
                        {this.props.extended?"Less":"More"}
                    </p>
                </ul>
            </div>
        )
    }
}

export default ServicesTags