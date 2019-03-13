import React, { Component } from "react";
import { MDBContainer,MDBCol,MDBRow} from "mdbreact";
import Navigation from './components/header/nav'
import StartPage from './components/startPage/startPage'
import { BrowserRouter as Router } from 'react-router-dom';
class App extends Component {

  state={
    
  }

  render(){

    return (
     
        <Router>
           <MDBContainer>
           
            <MDBRow>
              <MDBCol sm="12">
              <Navigation/>
              </MDBCol>
          </MDBRow>
            <MDBRow>
              <MDBCol sm="12">
                <StartPage/>
              </MDBCol>
          </MDBRow>
          </MDBContainer>
          
        </Router>
      
    );
  }
}


export default App;
