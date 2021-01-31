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
import moment from 'moment'

const onoffParam='Pileta'

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
                [onoffParam]:false,
                Heladera:false
            },
            location:'',
            guests:"",
            dorms:"",
            bathrooms:"",
            sorting:['rating'],
            dates:{
                startDate:null,
                endDate:null,
            },
            extended:false
        };
        this.datePicker=React.createRef()
    }
    async componentDidMount(){
        await this.loadSearchParamsFromCache()
        this.openExtendedServicesOnHidden()
    }
    // componentDidUpdate(){
    //     if(!this.state.dates.endDate||!this.state.dates.startDate)
    //     this.loadSearchParamsFromCache()
    // }
    loadSearchParamsFromCache=()=>{
        let cacheSearch=JSON.parse(localStorage.getItem('oceanicSearch'))
        if(!cacheSearch){
            return
        }
        cacheSearch={
            ...cacheSearch,
            dates:{
                startDate:moment(cacheSearch.dates.startDate),
                endDate:moment(cacheSearch.dates.endDate)
            }
        }
        // console.log(cacheSearch)
        this.setState(cacheSearch)
        // console.log(cacheSearch)
    }
    setSearchBarDates=dates=>{
        // console.log('Searchbar state: ',this.state)
        if(this.state.dates.endDate&&this.state.dates.startDate){
            return
        }
        this.setState({dates:{startDate:dates.startDate,endDate:dates.endDate}})
    }
    getSearchParams=()=>{
        return this.state
    }
    toggleService=serviceName=>{
        let servicesState={...this.state.services}
        servicesState[serviceName]=!servicesState[serviceName]
        this.setState({services:servicesState})
    }
    toggleExtendedServices=()=>{
        const currExtendedState=this.state.extended
        console.log('toggling extendedServices')
        this.setState({extended:!currExtendedState})
    }
    openExtendedServicesOnHidden=()=>{
        const services={...this.state.services}
        // console.log(services)
        let index=0
        let doOpen=false
        for(let serviceName in services){
            // console.log(index,services[serviceName])
            if(services[serviceName]&&index>=5){
                doOpen=true
            }
            index++
        }
        if(doOpen){
            // console.log('extending because hidden')
            this.setState({extended:true})
        }
    }
    changeLocation=event=>{
        this.setState({location:event.target.value})
    }
    disableInputHandler=(inputName)=>{
        const input= document.getElementById(inputName)
        if(!input.disabled){
            input.value=""
            this.setState({[inputName]:""})
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
                    value={this.state[param]}
                    changeInputHandler={this.changeInputHandler} 
                    disableInputHandler={this.disableInputHandler}/>
                ))
                }
                <div className={classes.Block}>
                    <div className={classes.Location}>
                        <h6 >Ubicacion</h6>
                        <Form.Control 
                            size="sm" as="select" 
                            onChange={this.changeLocation}
                            value={this.state.location}>
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
                        <h6 className={classes.Pool}>{onoffParam}</h6>
                        {/* SET ONOFF PARAM DINAMYCALLY THROUGH GLOBAL VARIABLE "onoffParam" */}
                        <OnOff 
                            checked={this.state.services[onoffParam]} 
                            clicked={this.toggleService}
                            onoffParam={onoffParam}/>
                    </div>
                </div>
                <div className={classes.Block}>
                    <h6 className={classes.Amenities}>Añade Filtros</h6>
                    <ServicesTags 
                        toggleExtendedServices={this.toggleExtendedServices}
                        extended={this.state.extended}
                        onoffParam={onoffParam}
                        initServicesState={this.state.services}
                        toggleService={this.toggleService} />
                </div>
                    <DatePicker 
                        endDate={this.state.dates.endDate}
                        startDate={this.state.dates.startDate}
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