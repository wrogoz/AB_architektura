import React from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBIcon } from "mdbreact";
import './entries.css'
import Image from './image/image'
import img1 from './images/10.jpg';
import img2 from './images/11.jpg';
import img3 from './images/8.jpg';
import img4 from './images/26.jpg';
import img5 from './images/29.jpg';
import img6 from './images/E.jpg';
import img7 from './images/15.jpg';
import img8 from './images/20.jpg';


const Entries = props => {
    return (
        <MDBContainer id="boxContainer">
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
                    <Image imgSrc={img3} linkAdress="/" />
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img4} linkAdress="/"/>
                </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img5} linkAdress="/"/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img6} linkAdress="/"/>
                </MDBCol>
            </MDBRow>
            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img7} linkAdress="/"/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                   
                        <Image imgSrc={img8} linkAdress="/wnetrza/bathroom"/>
               
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