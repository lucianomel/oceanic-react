import React,{  useState } from 'react';
import './App.css';
import LandingPage from './containers/Landing/Landing'
import { Route, Switch, withRouter } from 'react-router-dom';
import Destacados from './components/Destacados/Destacados'
import Navbar from './components/UI/Navbar/Navbar'
import Experiencias from './components/Experiencias/Experiencias'
import Footer from './components/Footer/Footer';
import Author from './components/Author/Author'
import Departamentos from './containers/Departamentos/Departamentos';
import Login from './components/Login/Login';
import DeptoDetails from './components/DeptoDetails/DeptoDetails';

function App(props) {
  let [prevState,setState]=useState({mobileToggler:true})
  const toggleMobileMenu=()=>{
      const initialToggleState=prevState.mobileToggler
      setState({mobileToggler:!initialToggleState})
  }
  const loadLandingSearchParams=landingSearchParams=>{
    console.log('executing loadLandingSearchParams from App component')
    setState({landingSearchParams:landingSearchParams})
    props.history.push('/departamentos')
  }
  return (
    <div className="App">
        <Navbar toggleMobileMenu={toggleMobileMenu}/>
        <Switch>
        <Route path='/' exact 
          render={
            ()=>{
              return <LandingPage 
                        showLandingTitle={prevState.mobileToggler}
                        loadLandingSearchParams={loadLandingSearchParams}/>
            }
          }
        />
        <Route path='/destacados' component={Destacados}/>
        <Route path='/experiencias' component={Experiencias}/>
        <Route path='/departamentos' 
          render={
            ()=>{
              return <Departamentos landingSearchParams={prevState.landingSearchParams} />
            }
          }
        />
        <Route path='/depto-details/:deptoId' component={DeptoDetails}/>
        <Route path='/login' component={Login}/>
        </Switch>
        <Footer/>
        <Author/>
    </div>
  );
}

export default withRouter(App);
