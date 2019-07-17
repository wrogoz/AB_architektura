import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './entries.css'
import Image from '../imageComponent/image'
import img1 from './images/wnetrza/dom_jednRodz/0_INTRO.jpg';
import img2 from './images/wnetrza/lazienka/0_INTRO.jpg';



const Entries = props => {
    return (
        <MDBContainer id="entries--container">
            <MDBRow className="entries--row">
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/" />
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img2} linkAdress="/wnetrza/bathroom"/>
                </MDBCol>
            </MDBRow>

            <MDBRow className="entries--row">
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/" />
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img2} linkAdress="/"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className="entries--row">
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/"/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img2} linkAdress="/"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className="entries--row">
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1} linkAdress="/"/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                   
                        <Image imgSrc={img2} linkAdress="/"/>
               
                </MDBCol>
            </MDBRow>
            
        </MDBContainer>
    )
}


export default Entries