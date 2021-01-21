import React,{ useEffect, useState } from 'react';
import './App.css';
import LandingPage from './containers/Landing/Landing'
import { BrowserRouter, Route } from 'react-router-dom';
import Destacados from './components/Destacados/Destacados'
import Navbar from './components/UI/Navbar/Navbar'
import Experiencias from './components/Experiencias/Experiencias'
import Footer from './components/Footer/Footer';
import Author from './components/Author/Author'
import Departamentos from './containers/Departamentos/Departamentos';

function App() {
  let [prevState,setState]=useState({mobileToggler:true})
  const toggleMobileMenu=()=>{
      const initialToggleState=prevState.mobileToggler
      setState({mobileToggler:!initialToggleState})
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar toggleMobileMenu={toggleMobileMenu}/>
        <Route path='/' exact 
          render={
            ()=>{
              return <LandingPage showLandingTitle={prevState.mobileToggler}/>
            }
          }
        />
        <Route path='/destacados' component={Destacados}/>
        <Route path='/experiencias' component={Experiencias}/>
        <Route path='/departamentos' 
          render={
            ()=>{
              return <Departamentos />
            }
          }
        />
        <Footer/>
        <Author/>
      </BrowserRouter>
    </div>
  );
}

export default App;
