import React from "react";
import {MDBIcon, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBRow, MDBCol } from
"mdbreact";
import './startPage.css'

const StartPage = () => {
  return (
    
  <MDBRow >
    <MDBCol sm="12" className="displayIntro ">
    <MDBContainer className="carousel " >
     
      <MDBCarousel activeItem={1} length={2} showControls={false} showIndicators={false} className="z-depth-0">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <div className="d-block w-100 " id='firstSlide'  />
              
            </MDBView>
            <MDBCarouselCaption>
              
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
                  <div className="d-block w-100" id="secondSlide" />
              
            </MDBView>
           
          </MDBCarouselItem>
          
          
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBRow className="iconRow">
            <MDBCol className="iconsCol" sm="12">
                <MDBIcon fab icon="facebook-f" />
              <MDBIcon fab icon="instagram" />
             </MDBCol>
      </MDBRow>
    </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
}

export default StartPage;