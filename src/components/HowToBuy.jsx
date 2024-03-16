import {React, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaClipboardCheck  } from "react-icons/fa";
import htitleImg from "../assets/img/HtitleImg.png";
import hsimg1 from "../assets/img/hsimg1.png";
import hsimg2 from "../assets/img/hsimg2.png";
import hsimg3 from "../assets/img/hsimg3.png";
import hsimg4 from "../assets/img/hsimg4.png";
import sectionShaapLight from "../assets/img/sectionShapLight.png";
import copyTxt from "../assets/img/copyTxt.png";
export default function HowToBuy() {
  const [textToCopy, setTextToCopy] = useState('0x69C0a0a9eC24B68Ad4795eD600cE23522E871994');
  const [isCopied, setIsCopied] = useState(false);
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
      })
      .catch(err => {
        console.error('Failed to copy to clipboard: ', err);
      });
  };
  const title = "HOW TO BUY";
  const howToBuyData = [
    {
      img: hsimg1,
      hsTitle: "Create a wallet",
      hsDesc: "Download Phantom from the app store or google play store for free. Desktop users, download the Phantom Google Chrome extension",
    },
    {
      img: hsimg2,
      hsTitle: "Get Some Sol",
      hsDesc: "Have $SOL in your wallet to switch to $VCAT. If you dont have $SOL in your wallet you can buy directly on your wallet, transfer from another wallet, or buy on another exchange and transfer to your wallet.",
    },
    {
      img: hsimg3,
      hsTitle: "Connect a Wallet",
      hsDesc: "Connect to Raydium or Jupiter and in Google Chrome or on the browser inside your  Phantom app. Connect your wallet. Paste the VCAT token token address into search, select VCAT and conrm. When your wallet prompts you for a wallet signature, sign.",
    },
  ];

  const tokenAddTitle = "VCat Token Address";
  return (
    <section className='howToBuy topShap' id='howToBuy'>
      <figure className='sectionShap'>
        <img src={sectionShaapLight} alt="" />
      </figure>
        <Container>
            <Row className='justify-content-center'>
                <Col xs={10}>
                  <div className="section-title d-flex align-items-end justify-content-between">
                    <h2>{title}</h2>
                    <figure>
                      <img src={htitleImg} alt="" />
                    </figure>
                  </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col xs={10}>
                <div className="hItemWrapper">
                  {howToBuyData.map((item, index)=>(
                    <div className="hSingleItem d-flex align-items-center" key={index}>
                      <figure className='sImg'>
                        <img src={item.img} alt="" />
                      </figure>
                      <div className="info">
                        <h3>{item.hsTitle}</h3>
                        <p>{item.hsDesc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hSingleItem direction d-flex align-items-center">
                  <div className="info">
                    <h3>{tokenAddTitle}</h3>
                    <div className="tokenomics_copyTxt copytoclipboard">
                          <input readOnly type="text"  value={textToCopy}
                              onChange={(e) => setTextToCopy(e.target.value)}/>

                          <button onClick={handleCopyToClipboard}>
                            {!isCopied && (
                              <span>
                                <img src={copyTxt} alt="Copy Text" />
                              </span>
                            )}
                            {isCopied && (
                              <span className='copyed'>
                                <FaClipboardCheck  />
                              </span>
                            )}
                          </button>
                      </div>
                  </div>
                  <figure className='sImg'>
                    <img src={hsimg4} alt="" />
                  </figure>
                </div>
              </Col>
              
            </Row>
        </Container>
    </section>
  )
}
