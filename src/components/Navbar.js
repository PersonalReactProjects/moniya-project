import React from 'react'
import logo from '../../src/assets/C1.png'
import { Link } from 'react-router-dom'

const Navbar = ({toggleDarkModeHandler, toggleFullScreenHandler}) => {
    return (
        <>
            <header className="hero-anime " id="top">
                <div className="navigation-wrap bg-light start-header start-style">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                                <Link className="nav-link" to="/" aria-haspopup="true" aria-expanded="false">Home</Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/about">About</Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/product">Product</Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/team">Our Team</Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link">Blog</Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/contact">Contact Us</Link>
                                            </li>
                                            {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services</Link>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to="/services">Service 1</Link>
                                                    <Link className="dropdown-item" to="/services">Service 2</Link>
                                                    <Link className="dropdown-item" to="/services">Service 3</Link>
                                                    <Link className="dropdown-item" to="/services">Service 4</Link>
                                                </div>
                                            </li> */}
                                            {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" style={{cursor:'pointer'}}>Settings</a>
                                                <div className="dropdown-menu">
                                                    <p className="dropdown-item" href="#" id="install-toggler">Install</p>
                                                    <p style={{fontWeight:500}} className="dropdown-item" id="fullscreen-toggler" onClick={toggleFullScreenHandler}>Go | Exit fullscreen</p>
                                                    <p style={{ fontWeight: 500 }} className="dropdown-item" id="dark-mode-toggler" onClick={toggleDarkModeHandler}></p>
                                                </div>
                                            </li> */}
                                            
                                            
                                            {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                        <Link className="nav-link" href="#">Blog</Link>
                                                </li>
                                                <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                        <Link className="nav-link" href="#">Contact</Link>
                                                </li> */}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
    
export default Navbar
