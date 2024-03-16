import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import rtitleImg from '../assets/img/RtitleImg.png';
import sectionShapDeep from "../assets/img/sectionShapDeep.png";
export default function RoadMap() {
  const title = "ROADMAP";
  const arrow = <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <g clip-path="url(#clip0_1_128)">
    <path d="M19 37.2629C29.4934 37.2629 38 28.9445 38 18.6832C38 8.42193 29.4934 0.103516 19 0.103516C8.50659 0.103516 0 8.42193 0 18.6832C0 28.9445 8.50659 37.2629 19 37.2629Z" fill="#0A1A03"/>
    <path d="M27.1728 12.5359C27.1978 12.0545 26.8205 11.6436 26.3302 11.6182L18.3402 11.2041C17.8499 11.1787 17.4322 11.5484 17.4072 12.0298C17.3823 12.5112 17.7595 12.9221 18.2498 12.9475L25.3521 13.3156L24.9907 20.2891C24.9657 20.7705 25.343 21.1814 25.8333 21.2068C26.3236 21.2322 26.7413 20.8625 26.7662 20.3811L27.1728 12.5359ZM11.8854 26.41L26.8808 13.1388L25.6892 11.841L10.6937 25.1122L11.8854 26.41Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1_128">
      <rect width="38" height="38" fill="white"/>
    </clipPath>
  </defs>
</svg>;
const cardWrapper = [
  {
    img: arrow,
    txt: "Tai pa pà, pai par ibi la pari-sse ndella den ga-ndo",
  },
  {
    img: arrow,
    txt: "Iabari babà bai barì bairi biribiribiri tse ndel la-ngo",
  },
  {
    img: arrow,
    txt: "Ga dilla dilma de-jarò, daghe daghe daghe dugu dugu di iadu",
  },
  {
    img: arrow,
    txt: "Ia ba dilla dilma de-jarò daghe daghe daghe dugu dugu du iadu",
  },
]
  return (
    <section className='roadMap topShap' id='roadMap'>
    <figure className='sectionShap'>
      <img src={sectionShapDeep} alt="" />
    </figure>
        <Container>
            <Row>
                <Col>
                  <div className="section-title d-flex justify-content-between align-items-end">
                    <h2>{title}</h2>
                    <img src={rtitleImg} alt="" />
                  </div>
                </Col>
            </Row>
            <Row className='card-wrapper justify-content-center'>
              {cardWrapper.map((item, index)=>(
                <Col sm={6} lg={3} key={index} className='text-center text-md-start mb-4'>
                  <a href='/' className="single-card">
                    <a href="/"><figure> {item.img} </figure></a>
                    <p>{item.txt}</p>
                  </a>
                </Col>
              ))}
            </Row>
        </Container>
    </section>
  )
}
