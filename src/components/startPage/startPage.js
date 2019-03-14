import React from "react";
import {MDBIcon, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol } from
"mdbreact";
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import './startPage.css'

const StartPage = () => {
  return (
    
  <MDBRow >
    <MDBCol sm="12" className="displayIntro ">
    <MDBContainer className="carousel " >
     
      <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={false} className="z-depth-0">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100 " src={img1} alt="First slide" />
              
            </MDBView>
            <MDBCarouselCaption>
              
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
                  <img className="d-block w-100" src={img2} alt="Second slide" />
              
            </MDBView>
           
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
                  <img className="d-block w-100" src={img3} alt="Third slide" />
             
            </MDBView>
    
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBRow className="iconRow">
            <MDBCol className="iconsCol" sm="12">
                <MDBIcon fab icon="facebook-f" size="1.5x"/>
              <MDBIcon fab icon="instagram" size="1.5x"/>
             </MDBCol>
      </MDBRow>
    </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
}

export default StartPage;