import React,{Component, Fragment} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Navigation,Pagination,Autoplay} from 'swiper'
import 'swiper/swiper-bundle.css'
import './Swiper.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import { faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {Spinner} from 'react-bootstrap'

SwiperCore.use([Navigation,Pagination,Autoplay])

const IMAGE_COUNT=6

class MySwiper extends Component{
    constructor(props){
        super(props)
        this.myref=React.createRef(this)
    }
    state={
        imgsLoaded:[],
        swiperLoaded:false
    }
    componentDidMount(){
        let btnNext=this.myref.current.querySelector('.swiper-button-next')
        let btnPrev=this.myref.current.querySelector('.swiper-button-prev')
        ReactDOM.render(<FontAwesomeIcon icon={faArrowRight} />,btnNext)
        ReactDOM.render(<FontAwesomeIcon icon={faArrowLeft} />,btnPrev)
        if(this.props.fullScreen){
            this.myref.current.swiper.autoplay.stop()
            this.myref.current.swiper.on('slideChange',()=>{
            console.log(this.myref.current.swiper.activeIndex)
            if(this.myref.current.swiper.activeIndex===(IMAGE_COUNT+1)){
                // console.log('stop autoplay')
                this.myref.current.swiper.autoplay.stop() 
            } else{
                // console.log('start autoplay')
                setTimeout(()=>{
                    this.myref.current.swiper.autoplay.start()
                },1000)
            }
        })
        }
        // swiper.querySelector('.swiper-button-next').innerHtml=<FontAwesomeIcon icon={faCoffee} />
    }
    loadSwiper(i){
        console.log(i)
        this.setState(prevState=>{
            return {imgsLoaded:[...prevState.imgsLoaded,i]}
        })
        if(this.state.imgsLoaded.length>=this.props.imagesRoutes.length-2){
            this.setState({swiperLoaded:true}) 
        }         
    }
    
    render(){
        const slides=[]
        let spinnerStyle={
            width:'8rem',
            height:'8rem'
        }
        if(this.props.fullScreen){
            spinnerStyle={width:'90vh',height:'90vh',margin:'2rem 0'}
        }
        const imgRoutes =[...this.props.imagesRoutes]
        for(let i=0;i<imgRoutes.length;i++){
            if(i===0&&this.props.fullScreen){
                imgRoutes.unshift('')
            }
            slides.push(
                <SwiperSlide 
                key={`slide-${i}`} 
                tag='li' 
                style={{listStyle:'none'}}
                >
                    {this.state.swiperLoaded?null:
                    <Spinner animation="border" 
                        style={spinnerStyle} />}
                    {i===0&&this.props.fullScreen?
                        <video width="100%" height="100%" autoPlay muted loop>
                            <source src='/Videos/cortado.mp4' type="video/mp4"/>
                        </video>
                    :
                        <img 
                        onLoad={this.loadSwiper.bind(this,i)}
                        style={{
                                borderRadius:this.props.deptoCard?'0.3rem':null,
                                maxHeight:this.props.deptoCard?'280px':null,
                                width:this.props.width,
                                display:this.state.swiperLoaded?'block':'none',
                                background:'grey'
                            }} 
                        src={imgRoutes[i]} 
                        alt={`Slide ${i}`}/>
                    }
                </SwiperSlide>
            )   
        }
        return(
            <Fragment>
                {this.props.toggleShowTitle?
                <Fragment>
                    <h1 className='Title'>{this.props.title}</h1>
                    <h5 className='Subtitle'>{this.props.subtitle}</h5>    
                </Fragment>
                :
                null
                }
                <Swiper id="main" 
                    style={{maxHeight:this.props.fullScreen?'620px':null}}
                    loop={true}
                    autoplay={this.props.autoplay?{
                        delay:'5000',
                        disableOnInteraction:true
                    }:{delay:'86400000'}}
                    ref={this.myref}
                    itemRef='swiper'
                    tag='section' 
                    wrapperTag='ul' 
                    navigation pagination 
                    >
                    {slides}
                </Swiper>
            </Fragment>
        )
    }
}

export default MySwiper