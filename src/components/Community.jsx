import React from "react"
import { Col, Container, Row } from 'react-bootstrap';
import sectionShapLight from "../assets/img/sectionShapLight.png";
import gtitleImg from '../assets/img/gtitleImg.png';
import img1 from '../assets/img/gallery/galleryImg1.png';
import img2 from '../assets/img/gallery/galleryImg2.png';
import img3 from '../assets/img/gallery/galleryImg3.png';
import img4 from '../assets/img/gallery/galleryImg4.png';
import img5 from '../assets/img/gallery/galleryImg5.png';
import img6 from '../assets/img/gallery/galleryImg6.png';
import img7 from '../assets/img/gallery/galleryImg7.png';
import img8 from '../assets/img/gallery/galleryImg8.png';
import img9 from '../assets/img/gallery/galleryImg9.png';
import img10 from '../assets/img/gallery/galleryImg10.png';
import img11 from '../assets/img/gallery/galleryImg11.png';
export default function Tokenomics() {
  return (
    <section className="community topShap" id="community">
    <figure className='sectionShap'>
      <img src={sectionShapLight} alt="" />
    </figure>
      <Container>
        <Row>
          <Col md={7}>
            <div className="gallery-title">
              <div className="title-info">
                <h2>COMMUNITY </h2>
                <p>Join the Community and Vibe with us. Tag <b>@$VCAT</b> And <b> @VibingCatSolana</b> and vibe Vibing Cat on Socials. </p>
              </div>
              <figure>
                <img src={gtitleImg} alt=""/>
              </figure>
            </div>
          </Col>
          <Col md={5} className="text-end">
            <div className="gtitleRight">
              <h2>VIBES</h2>
              <p>The most active Vibing Cats will  receive some goodies now and then airdopped. Follow us and stay tuned!</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="grid-wrapper">
              <div className="img1">
                <img src={img1} alt="" />
              </div>
              <div  className="img2">
              <img src={img2} alt="" />
              </div>
              <div  className="img3">
              <img src={img3} alt="" />
              </div>
              <div  className="img4">
              <img src={img4} alt="" />
              </div>
              <div  className="img5">
              <img src={img5} alt="" />
              </div>
              <div className="img6">
              <img src={img6} alt="" />
              </div>
              <div className="img7">
              <img src={img7} alt="" />
              </div>
              <div className="img8">
              <img src={img8} alt="" />
              </div>
              <div className="img9">
              <img src={img9} alt="" />
              </div>
              <div  className="img10">
              <img src={img10} alt="" />
              </div>
              <div  className="img11">
              <img src={img11} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section> 
  );
}

