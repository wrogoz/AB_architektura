import React, { Component } from "react";
import { MDBContainer,MDBCol,MDBRow} from "mdbreact";
import Navigation from './components/header/nav'
import StartPage from './components/startPage/startPage'
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css'
class App extends Component {

  state={
    
  }

  render(){

    return (
     
        <Router>
           <MDBContainer fluid>
           {/* NAVIGATION */}
            <MDBRow >
              <MDBCol sm="12" id="naviCol">
                <Navigation/>
              </MDBCol>
              </MDBRow>
              {/* DISPLAY SECTIONS */}

              <StartPage />
             
          </MDBContainer>
          
        </Router>
      
    );
  }
}


export default App;
