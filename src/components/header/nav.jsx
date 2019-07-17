
import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import './nav.css'
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {

    


    return (

      //        FIXED VERSION 1.0
     
        // <header className="header ">
         
        // <MDBNavbar className="navBar  z-depth-0" light expand="md"  >
        //   <MDBNavbarBrand href="/" className="black-text" >
        //         <strong>A+B LOGO</strong>
        //       </MDBNavbarBrand>
        //       {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
        //       <MDBCollapse isOpen={this.state.collapse} navbar>
        //       <MDBNavbarNav right>
        //           <MDBNavItem >
        //         <MDBNavLink className="black-text" to="/projekty">PROJEKTY</MDBNavLink>
        //           </MDBNavItem>
        //           <MDBNavItem>
        //         <MDBNavLink className="black-text" to="/architektura">ARCHITEKTURA</MDBNavLink>
        //           </MDBNavItem>
        //           <MDBNavItem>
        //         <MDBNavLink className="black-text" to="/wnetrza">WNĘTRZA</MDBNavLink>
        //           </MDBNavItem>
        //           <MDBNavItem>
        //         <MDBNavLink className="black-text" to="kontakt">KONTAKT</MDBNavLink>
        //           </MDBNavItem>
        //         </MDBNavbarNav>
        //       </MDBCollapse>
        //     </MDBNavbar>
         

        // </header>


// wersja 2

<header id="header">
            <MDBNavbar  light expand="md" className="navBar  z-depth-0" >
              <MDBNavbarBrand href="/" className="black-text">
              <div id="logo" ></div>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem >
                <MDBNavLink className="black-text" to="/projekty" onClick={this.onClick}>PROJEKTY</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                <MDBNavLink className="black-text" to="/architektura" onClick={this.onClick}>ARCHITEKTURA</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                <MDBNavLink className="black-text" to="/wnetrza" onClick={this.onClick}>WNĘTRZA</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                <MDBNavLink className="black-text" to="kontakt" onClick={this.onClick}>KONTAKT</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
         

        </header>

    );
  }
}



export default Navigation;