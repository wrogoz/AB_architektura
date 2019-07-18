import React from 'react';
import {MDBIcon, MDBContainer, MDBRow, MDBCol } from "mdbreact";

const Description = props => {
    return(
        <MDBContainer >
            <MDBRow>
                <MDBCol sm="12" className="description__txt" >
                    <h2>{props.title}</h2>
                    <h3>Lokalizacja: {props.location}</h3>
                    <h3>Klient:{props.client}</h3>
                    <h3>Powierzchnia: {props.area} m<sup>2</sup></h3>
                    <h3>Status: {props.status}</h3>
                    <h3>Autorzy: {props.author}</h3>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol sm="12" className="description__img">
                    {props.children}
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    )
}

export default Description;