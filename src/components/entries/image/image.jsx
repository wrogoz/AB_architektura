import React from 'react';
import './image.css'
import { MDBMask, MDBView } from "mdbreact";
const Image = props =>{

    let style={
        backgroundImage: `url(${props.imgSrc})`
    }
    return (
        <MDBView hover>
        <div className="imageSet" style={style}>
        <MDBMask className="flex-center" overlay="stylish-strong">
                <p className="white-text mask__txt">A + B Architektura</p>
              </MDBMask>
              </div>
        </MDBView>

    )
}

export default Image;