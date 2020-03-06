import React from 'react'
import HeadShake from 'react-reveal/Shake';
import { Link } from 'react-router-dom'

const Footer = ({ toggleDarkModeHandler }) => {
    return(
    
            <footer className="footer-distributed footer-bg-light" id="footer-container">

                <div className="footer-left">

                    <h3 style={{ fontFamily: 'Poppins' }}>Moniya<span style={{ color: '#90cc41', fontFamily: 'Poppins' }}>.com.ng</span></h3>

                    <p className="footer-links">
                        <Link style={{ color: '#90cc41', fontFamily: 'Poppins' }} to="/">Home</Link>
                        ·
                            <Link style={{ fontFamily: 'Poppins' }} to="/about">About</Link>
                        ·
                            <Link style={{ color: '#90cc41', fontFamily: 'Poppins' }} to="/product">Product</Link>
                        ·
                            <Link style={{ fontFamily: 'Poppins' }} to="/Team">Team</Link>
                        {/* ·
                            <Link style={{ color: '#90cc41', fontFamily: 'Poppins' }} to="#">Faq</Link>
                                                ·
                            <Link style={{ fontFamily: 'Poppins' }} to="#">Contact</Link> */}
                    </p>

                <p className="footer-company-name" style={{ color: '#90cc41', fontFamily: 'Poppins' }}>Moniya &copy; 2020</p>
                <div className="footer-icons">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
            

            <div className="footer-center">
                    <div >
                        <a href ="tel:+234-703-884-2080"><HeadShake><i className="fa fa-phone"></i></HeadShake>
                            <p style={{ fontFamily: 'Poppins' }}>+234(0)703-884-2080</p>
                        </a>
                    </div>
                    <div>
                        <a href="mailto:info@moniya.com.ng" target="_blank">
                            <i className="fa fa-envelope"></i>
                            <p style={{ color: '#90cc41', fontFamily: 'Poppins' }}>info@moniya.com.ng</p>
                        </a>
                    </div>
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p style={{ color: '#90cc41', fontFamily: 'Poppins' }}>Moniya, Ibadan, Oyo state</p>
                </div>
                
                
                <div className="section mt-5"></div>
                
                </div>
                <div className="footer-right">
                    <p className="footer-company-about text-left" style={{ fontFamily: 'Poppins' }}>
                        <span style={{ fontFamily: 'Poppins' }}>About the company</span>
                        Moniya &copy; Ng Ltd is Link company Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore &amp; SEO Learner.
		            </p>
                <div className="switch-container">
                    <div id="switch" className="mt-3" onClick={toggleDarkModeHandler}>
                        <div id="circle"></div>
                    </div>
                </div>
            </div>
                <div>
                    <Link to="#top" className="back-to-top"><i className="fa fa-chevron-up"></i></Link>
                    {/* <div id="preloader"></div> */}
                </div>
            </footer>
    )

}

export default Footer
