import React from 'react';
import './image.css'
import { MDBMask, MDBView, MDBNavLink } from "mdbreact";
const Image = props =>{
    
    Image.defaultProps = {
        linkAdress: "/",
      }
    let style={
        backgroundImage: `url(${props.imgSrc})`
    }
    return (
        <MDBNavLink className="black-text" to={props.linkAdress}>
        <MDBView hover>
        
        <div className="imageSet" style={style}>
        <MDBMask className="flex-center" overlay="white-light">
                <p className="white-text mask__txt">A + B Architektura</p>
              </MDBMask>
              </div>
              
        </MDBView>
        </MDBNavLink>
    )
}

export default Image;