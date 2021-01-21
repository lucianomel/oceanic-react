// import classes from './Landing.module.css'
import Swiper from '../../components/UI/Swiper/Swiper'
import React,{ Component, Fragment } from 'react'
import HorizCard from '../../components/UI/HorizCard/HorizCard'
import JumboLink from '../../components/UI/JumboLink/JumboLink'
import IntroLanding from '../../components/IntroLanding/IntroLanding'
import SocialIcons from '../../components/UI/SocialIcons/SocialIcons'
import DropdownBlock from '../../components/UI/DropdownBlock/DropdownBlock'
import Book from '../../components/Book/Book'

class LandingPage extends Component{
    state={
        landingPath:'/Images/Landing/main/',
        firstCardPath:'/Images/Landing/firstCard/',
        secondCardPath:'/Images/Landing/secondCard/'
    }
    render(){
        return(
            <Fragment>
                    <Swiper width='100%' fullScreen title='Oceanic Propiedades' 
                        autoplay={true}
                        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus euismod eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vulputate faucibus eros nec dapibus. Mauris volutpat tellus turpis, eu faucibus ligula varius in. Nullam dictum lacus vel velit porttitor, at malesuada metus mollis.' 
                        toggleShowTitle={this.props.showLandingTitle}
                        imagesRoutes={
                            ['Boca_Grande.jpg','cartagena.jpg']
                            .map(route=>this.state.landingPath+route)
                        }
                    />
                    <SocialIcons/>
                    <IntroLanding/>
                    <HorizCard 
                        imagesRoutes={
                            ['Boca_Grande.jpg','cartagena.jpg']
                            .map(route=>this.state.firstCardPath+route)
                        }
                        type='textRight'/>
                    <HorizCard 
                        imagesRoutes={
                            ['Boca_Grande.jpg','cartagena.jpg']
                            .map(route=>this.state.secondCardPath+route)
                        }
                        type='textLeft'/>
                    <JumboLink imgRoute='manga_2.jpg' text='Departamentos destacados' 
                        linkName='destacados'/>
                    <JumboLink imgRoute='manga_5.jpg' text='Cultura Colombiana' 
                        linkName='experiencias'/>
                    <DropdownBlock dropdownTitle='El cabrero'/>
                    <DropdownBlock dropdownTitle='Marbella'/>
                    <DropdownBlock dropdownTitle='El Laguito' />
                    <Book/>
            </Fragment>
        )
    }
}

export default LandingPage