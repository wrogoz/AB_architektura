import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './entries.css'
import Image from './image/image'
import img1 from './images/10.jpg';
import img2 from './images/11.jpg';
import img3 from './images/17.jpg';
import img4 from './images/26.jpg';


const sources=[img1,img2,img3,img4];

const Entries = props => {
    return (
        <MDBContainer id="boxContainer">
            <MDBRow >
                <MDBCol sm="12" md="6">
                    <Image imgSrc={img1}/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                <Image imgSrc={img2}/>
                </MDBCol>
            </MDBRow>

            <MDBRow >
                <MDBCol sm="12" md="6">
                <Image imgSrc={img3}/>
                </MDBCol>
                <MDBCol sm="12" md="6">
                <Image imgSrc={img4}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}


export default Entries