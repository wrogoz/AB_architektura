import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBRow, MDBCol } from
"mdbreact";
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import './startPage.css'

const StartPage = () => {
  return (
    
  <MDBRow >
    <MDBCol sm="12" class="displayIntro">
    <MDBContainer className="carousel">
     
      <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={false} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={img1} alt="First slide" />
              
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
    false
          </MDBCarouselItem>
          
        </MDBCarouselInner>
      </MDBCarousel>
      <MDBRow >
        <MDBCol className="iconsCol" sm="12">tu 2 ikonki</MDBCol>
      </MDBRow>
    </MDBContainer>
      </MDBCol>
    </MDBRow>
  );
}

export default StartPage;