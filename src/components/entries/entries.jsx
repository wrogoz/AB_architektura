import React from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact";
import './entries.css'
import Image from './image/image'
import img1 from './images/wnetrza/dom_jednRodz/0_INTRO.jpg';
import img2 from './images/wnetrza/lazienka/0_INTRO.jpg';



const Entries = props => {
    return (
        <MDBContainer id="boxContainer">
            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/" />
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img2} linkAdress="/wnetrza/bathroom"/>
                </MDBCol>
            </MDBRow>

            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/" />
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img2} linkAdress="/"/>
                </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/"/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img2} linkAdress="/"/>
                </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/"/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                   
                        <Image imgSrc={img2} linkAdress="/"/>
               
                </MDBCol>
            </MDBRow>
            <MDBRow className="iconRow ">
                <MDBCol className="iconsCol entries_icon" sm="12">
                    <MDBIcon fab icon="facebook-f" />
                    <MDBIcon fab icon="instagram"  />
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}


export default Entries