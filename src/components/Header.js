import React from "react";
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import { Container, Row, Col } from 'reactstrap';
import logo from '../assets/image/logo.png';
import coin_back_t from '../assets/image/coin_back_t.png';
import coin_back_b from '../assets/image/coin_back_b.png';
import logo_b from '../assets/image/logo_b.png';
import header_r_m_1 from '../assets/image/elrond-egld-egld-logo 1.png'
import header_r_m_2 from '../assets/image/Group 408.png'

class HelloWorld extends React.Component {
   constructor(props) {
      super(props);

   }

   componentDidMount() {
      const frameHeight = 200;
      const frames = 23;
      let frame = 0;
      setInterval(() => {
          const frameOffset = (++frame % frames) * -frameHeight;
          const backgroundPosition = "0px " + frameOffset + "px";
          var animdiv = document.querySelector('#animation');
          var animdiv_m = document.querySelector('#animation_m');
          animdiv.style.setProperty('background-position', backgroundPosition);
          animdiv_m.style.setProperty('background-position', backgroundPosition);
      }, 100);
   }

   render() {
      return (
         <div>
               <div className="header_back">
               
               <Row className="header">
                  <Col lg={3} md={3} xs={6} className="header_l">
                     <img src={logo} alt="logo_img" style={{float:"left"}}></img>
                     <p className="logo_p">hatom</p>
                  </Col>
                  <Col lg={6} md={6} xs={12} className="header_m">
                     <div className="header_mc">
                        <div className="header_mc1">
                           <a className="header_mp" style={{width: '56px'}}>Markets</a>
                           <a className="header_mp" style={{width: '83px'}}>Governance</a>
                           <a className="header_mp" style={{width: '43px'}}>Prices</a>
                           <a className="header_mp" style={{width: '35px'}}>Docs</a>
                           <Row>
                              <Col>
                                 <a className="header_mp" style={{width: '90px', color: '#3555F7'}}>Hatom Token</a>
                              </Col>
                              <Col>
                                 <div style={{width: '82px', height: '2px', background: '#102860', borderRadius: '20px'}}></div>
                              </Col>
                           </Row>
                           <div style={{marginTop: '7px', marginLeft: '-30px', width: '2px', height: '2px', background: '#00D395', border: '1.5px solid rgba(0, 211, 149, 0.43)', borderRadius: '2px'}}></div>
                           
                        </div>
                     </div>
                  </Col>
                  <Col lg={3} md={3} xs={6} className="header_r">
                     <button className="header_rb"><p>App</p></button>
                     <div className="herder_rb_m1" style={{background: '#021326', float: 'right'}}><img src={header_r_m_2} style={{float:"left"}}></img></div>
                     <div className="header_rb_m"><img src={header_r_m_1} style={{float:"left"}}></img><p>Elrond</p></div>
                  </Col>
               </Row>
               <Row className="header_t">
                  <Col lg={4} md={4} xs={2}>
                  </Col>
                  <Col lg={4} md={4} xs={10}>
                     <p className="s_p2">Hatom Token</p>
                     <p className="s_p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Col>
                  <Col lg={4} md={4} xs={2}>
                  </Col>
               </Row>
            </div>
            <Row className="buy">
               <Col lg={2} md={2} xs={1}>
               </Col>
               <Col lg={7} md={7} xs={12}>
                  <Row>
                     <Col lg={6} md={6} xs={6}>
                        <div className="buy_p1"><p>$9,449,627.26</p><p style={{color: '#179C64', paddingLeft: '8px'}}>Dividends</p></div>
                        <p className="buy_p2">Paid out to Hatom Token Holders over 3 years</p>
                     </Col>
                     <Col lg={6} md={6} xs={6}>
                        <button className="buy_b"><p>Buy Hatom Tokens</p></button>
                     </Col>
                  </Row>
               </Col>
               <Col lg={2} md={2} xs={1}>
               </Col>
            </Row>
            <Row className="coin_m">
               <Col lg={1} md={1} xs={1}>
               </Col>
               <Col lg={10} md={10} xs={10}>
                  <Row>
                     <Col lg={3} md={3} xs={3} style={{width: '20%'}}>
                        <div id="animation_m"></div>
                     </Col>
                     <Col lg={7} md={7} xs={7}>
                     </Col>
                     <Col lg={2} md={2} xs={3} style={{marginLeft: '-4%', marginRight: '-4%', width: '20%', marginTop: '32px'}}>
                     </Col>
                  </Row>
               </Col>
               <Col lg={1} md={1} xs={1}>
               </Col>
            </Row>
            <Row className="coin">
               <Col lg={1} md={1} xs={1}>
               </Col>
               <Col lg={10} md={10} xs={10}>
                  <div className="coin_p1"><p>Features</p><p style={{color: '#000000', paddingLeft: '8px'}}>of Hatom Protocol</p></div>
                  <Row>
                     <Col lg={3} md={3} xs={3} style={{width: '20%'}}>
                        <div>
                           <div style={{display: 'flex'}}><p className="coin_pt">Earn</p>
                              <div className="coin_back_t"><img src={coin_back_t} alt="coin_back_img" style={{float:"left", width: '46vw'}}></img></div>
                           </div>
                           <p className="coin_pc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                        </div>
                        <div id="animation"></div>
                        <div style={{paddingTop: '40px'}}>
                           <div style={{display: 'flex'}}><p className="coin_pt">Borrow</p>
                              <div  className="coin_back_b"><img src={coin_back_b} alt="coin_back_img" style={{float:"left", width: '22vw'}}></img></div>
                           </div>
                           <p className="coin_pc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           
                        </div>
                        <div>

                        </div>
                     </Col>
                     <Col lg={7} md={7} xs={7}>
                        
                     </Col>
                     <Col lg={2} md={2} xs={3} style={{marginLeft: '-4%', marginRight: '-4%', width: '20%', marginTop: '32px'}}>
                        <div>
                           <p className="coin_pt">Dividends</p>
                           <p className="coin_pc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tortor, dignissim sit amet.</p>
                           <div className="coin_dot"></div><p className="coin_pc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort, dignissim sit ametent.</p>
                           <div className="coin_dot"></div><p className="coin_pc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit amet.ectetur adip from one ex-diivident date othe next</p>
                        </div>
                     </Col>
                  </Row>
               </Col>
               <Col lg={1} md={1} xs={1}>
               </Col>
            </Row>
            <Row className="buy_m">
               <Col lg={2} md={2} xs={2}>
               </Col>
               <Col lg={7} md={7} xs={10} style={{alignContent: 'center', textAlign: '-webkit-center'}}>
                        <div className="buy_p12_m"><p>Features</p><p style={{color: '#000000', paddingLeft: '8px'}}> of Hatom</p></div>
                        <div className="buy_p12_m"><p style={{color: '#000000', paddingLeft: '80px'}}>Token</p></div>
               </Col>
               <Col lg={2} md={2} xs={1}>
               </Col>
            </Row>
            <Row className="buy_m">
               <Col lg={2} md={2} xs={2}>
               </Col>
               <Col lg={7} md={7} xs={8} style={{alignContent: 'center', textAlign: '-webkit-center'}}>
                        <div className="buy_p11_m" style={{paddingLeft: '100px'}}><p>Earn</p></div>
                        <p className="buy_p22_m">Stake your Hatom tokens to earn a share of the protocol's revenue. Dividends are paid in EGLD, USDC, MEX, HTM, and RIDE.</p>
               </Col>
               <Col lg={2} md={2} xs={2}>
               </Col>
            </Row>
            <Row className="buy_m">
               <Col lg={2} md={2} xs={2}>
               </Col>
               <Col lg={7} md={7} xs={8} style={{alignContent: 'center', textAlign: '-webkit-center'}}>
                        <div className="buy_p11_m" style={{paddingLeft: '100px'}}><p>Vote</p></div>
                        <p className="buy_p22_m">Decide which token should be listed next, and what upgrade or feature should be integrated into the protocol.</p>
               </Col>
               <Col lg={2} md={2} xs={2}>
               </Col>
            </Row>
            <Row className="buy_m">
               <Col lg={2} md={2} xs={2}>
               </Col>
               <Col lg={7} md={7} xs={8} style={{alignContent: 'center', textAlign: '-webkit-center'}}>
                        <div className="buy_p11_m"><p>Supply & Borrow</p></div>
                        <p className="buy_p22_m">Hatom token holders can use the HTM Money Market to :</p>
                        <div className="footer_1_m"></div>
                        <p className="buy_p22_m" style={{textAlign: 'left'}}>Supply HTM and earn interest on their deposit.</p>
                        <div className="footer_1_m"></div>
                        <p className="buy_p22_m" style={{textAlign: 'left'}}>Use HTM as collateral and take a loan of any available crypto asset.</p>
               </Col>
               <Col lg={2} md={2} xs={2}>
               </Col>
            </Row>
            <Row className="buy_m">
               <Col lg={2} md={2} xs={2}>
               </Col>
               <Col lg={7} md={7} xs={8} style={{alignContent: 'center', textAlign: '-webkit-center'}}>
                        <div className="buy_p1_m"><p>$9,449,627.26</p><p style={{color: '#179C64', paddingLeft: '8px'}}>Dividends</p></div>
                        <p className="buy_p2_m">Paid out to Hatom Token Holders over 3 years</p>
                        <button className="buy_b_m"><p>Buy Hatom Tokens</p></button>
               </Col>
               <Col lg={2} md={2} xs={2}>
               </Col>
            </Row>
            <Row className="sub">
               <Col lg={3} md={3} xs={1}>
               </Col>
               <Col className="sub_c" lg={6} md={6} xs={10}>
                  <p className="sub_ct">Subscribe to Hatom newsletter</p>
                  <p className="sub_cc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. tort dignissim sit .</p>
                  <div className="sub_con">
                     <div class="input-group sub_con1">
                        <input type="search" className="form-control rounded search_sub" placeholder="Enter your email" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" className="btn btn-outline-primary sub_btn">Subscribe</button>
                     </div>
                     <button type="button" className="btn btn-outline-primary sub_btn_m">Subscribe</button>
                  </div>
               </Col>
               <Col lg={3} md={3} xs={1}>
               </Col>
            </Row>
            <Row style={{background: '#031222', paddingTop: '94px'}}>
               <Col lg={3} md={3} xs={6}>
                  <img src={logo_b} alt="logo_b_img" className="footer_logo"></img>
                  <p className="footer_l1">© 2022 Hatom ,LLC.</p>
               </Col>
               <Col className="footer_c" lg={6} md={6} xs={12}>
                  <Row>
                     <Col lg={4} md={4} xs={6}>
                        <p className="footer_ct">Protocol</p>
                        <p className="footer_cc">Markets</p>
                        <p className="footer_cc">Prices</p>
                        <p className="footer_cc">Docs</p>
                     </Col>
                     <Col lg={4} md={4} xs={6}>
                        <p className="footer_ct">Governance</p>
                        <p className="footer_cc">Overview</p>
                        <p className="footer_cc">Hatom token</p>
                     </Col>
                     <Col lg={4} md={4} xs={6}>
                        <p className="footer_ct">Security</p>
                        <p className="footer_cc">Audits</p>
                        <p className="footer_cc">Formal Verifications</p>
                        <p className="footer_cc">Economic Security</p>
                        <p className="footer_cc">Bug Bounty</p>
                     </Col>
                  </Row>
               </Col>
               <Col lg={3} md={3} xs={6} className="footer_r">
                  <button className="header_rb"><p>App</p></button>
               </Col>
            </Row>
            <div style={{background: '#031222', paddingTop: '14px'}}>
               <div className="footer_line"></div>
               <div className="footer_line"></div>
            </div>
            <div style={{background: '#031222', paddingTop: '10px', paddingLeft: '61px', height: '40px'}}>
               <div className="footer_1"></div>
               <p className="footer_2">Latest Block: 14296113</p>
               <p className="footer_l1_m">© 2022 Hatom ,LLC.</p>
            </div>
         </div>
         
      );
   }
}

export default HelloWorld;