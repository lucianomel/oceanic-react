import classes from "./SearchDeptoHBar.module.css";
import React,{ Component } from "react";
import {Button,Form }from 'react-bootstrap'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import OnOff from "../UI/OnOff/OnOff";
import ServicesTags from "../ServicesTags/ServicesTags";
import SearchParam from "./SearchParam/SearchParam";
import SortingButtons from "./SortingButtons/SortingButtons";
import DatePicker from "../UI/DatePicker/DatePicker";

class SearchDeptoHBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            priceRange: { min: 200, max: 2000 },
            services:{
                Aire_acondicionado:true, //Default true
                Wifi:true, //Default true
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
                Pileta:false,
                Heladera:false
            },
            location:'',
            guests:undefined,
            dorms:undefined,
            bathrooms:undefined,
            sorting:['rating'],
            startDate:null,
            endDate:null
        };
        this.datePicker=React.createRef()
    }
    // componentDidMount(){
    //     this.setState({
    //         startDate:this.datePicker.current.state.startDate,
    //         endDate:this.datePicker.current.state.endDate,
    //     })
    // }
    setSearchBarDates=dates=>{
        console.log('Searchbar state: ',this.state)
        if(this.state.endDate&&this.state.startDate){
            return
        }
        this.setState({startDate:dates.startDate,endDate:dates.endDate})
    }
    getSearchParams=()=>{
        return this.state
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
    changeLocation=event=>{
        this.setState({location:event.target.value})
    }
    disableInputHandler=(inputName)=>{
        const input= document.getElementById(inputName)
        if(!input.disabled){
            input.value=undefined
            this.setState({[inputName]:undefined})
        }   
        input.disabled=!input.disabled
    }
    changeInputHandler=(event,inputName)=>{
        this.setState({[inputName]:+event.target.value})
    }
    chooseSorting= async sortingParam=>{
        await this.setState({sorting:sortingParam})
        this.props.loadDeptos(true) //goToFirstPage = true
    }
    render(){
        return(
            <div className={classes.SerchHBar}>
                <h4 className={classes.SerchHBar__Title}>Opciones de busqueda</h4>
                <div className={classes.Block}>
                    <SortingButtons loadDeptos={this.chooseSorting} />
                </div>
                <div className={classes.Block}>
                    <h6 className={classes.PriceRange}>Renta mensual</h6>
                    <div className={classes.Slider}>
                    <InputRange
                        maxValue={2000}
                        minValue={200}
                        value={this.state.priceRange}
                        onChange={priceRange => this.setState({ priceRange })} />
                    </div>
                </div>
                {['guests','dorms','bathrooms'].map(param=>(
                    <SearchParam //Set caption inside component before adding another
                    param={param} 
                    key={param}
                    changeInputHandler={this.changeInputHandler} 
                    disableInputHandler={this.disableInputHandler}/>
                ))
                }
                <div className={classes.Block}>
                    <div className={classes.Location}>
                        <h6 >Ubicacion</h6>
                        <Form.Control size="sm" as="select" onChange={this.changeLocation}>
                            <option>Cualquiera</option>
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
                    <ServicesTags 
                        toggleService={this.toggleService}
                        defaultServices={['Wifi','Aire acondicionado']} />
                </div>
                    <DatePicker 
                        endDate={this.state.endDate}
                        startDate={this.state.startDate}
                        setSearchBarDates={this.setSearchBarDates} />
                <div className={classes.Block}>
                    <Button 
                    className={classes.SearchButton}
                    onClick={()=>this.props.loadDeptos(this.state)}
                    >Search this</Button>
                </div>
            </div>
        )
    }
}

export default SearchDeptoHBar