import React from 'react'
//import Fade from 'react-reveal/Fade';
import Typed from 'typed.js'
import $ from 'jquery'
import CallToAction from '../components/CallToAction'
import ILRI from '../assets/ilri.jpg'
import IITA from '../assets/iita-resized-bg.png'
import CGIAR from '../assets/CGIAR-resized.jpg'


export default class Home extends React.Component{

    componentDidMount() {
        /*--/ Star Typed /--*/
        if ($('.text-slider').length === 1) {
            var typed_strings = $('.text-slider-items').text();
            new Typed('.text-slider', {
                strings: typed_strings.split(','),
                typeSpeed: 100,
                loop: true,
                backDelay: 1100,
                backSpeed: 50
            });
        }
    }
    

    render() {
        return (
            <>
                <section className="d-flex" style = {{ overflow: 'auto', margin: 'auto', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="container">
                        <div className="row height align-items-center">
                            <div className="col">
                                <h1 className="text-center text-capitalize">Welcome to Moniya <small>Ventures</small></h1>
                                <p className="lead text-left">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat at nobis cupiditate fuga rem iusto doloremque veniam officia ratione quia <strong className="text-slider"></strong></p>
                                <p className="intro-subtitle lead text-left"><span className="text-slider-items" style={{ display: 'none' }}>High Quality Cassava Peel-Fine,High Quality Cassava Peel-coarse</span></p>
                                {/* <a href="#" className="btn btn-outline-primary btn-lg text-capitalize">press here</a>
                                <a href="#" className="btn btn-outline-success btn-lg text-capitalize">press here</a> */}
                            </div>
                        </div>
                    </div>
                </section>


                <section id="filler-metrics" className="p-5">
                    <div className="container">
                        <div className="mb-5 row">
                            <div className="text-center col">
                                <span className=" h3" style={{color:'#21954a'}}>How Far We Have Come</span>
                            </div>
                        </div>
                        <div className="recognised row">
                            <div className="col-lg-4 col-md-6">
                                <div className="farmMetrics">
                                    <h1 className="metricsh" style={{marginBottom: '0px', fontSize: '32px', fontWeight: 900}}>0</h1>
                                    <p className="metricsp" style={{ fontSize: '15px', color: '#21954a' }}>Amount of Cassava Peel Processed</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="farmMetrics">
                                    <h1 className="metricsh" style={{ marginBottom: '0px', fontSize: '32px', fontWeight: 900 }}>0</h1>
                                    <p className="metricsp" style={{ fontSize: '15px', color: '#21954a' }}>Amount of HQCP Produced</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="farmMetrics">
                                    <h1 className="metricsh" style={{ marginBottom: '0px', fontSize: '32px', fontWeight: 900 }}>0</h1>
                                    <p className="metricsp" style={{ fontSize: '15px', color: '#21954a' }}>Equivalent Weight of Corn  </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="farmMetrics">
                                    <h1 className="metricsh" style={{marginBottom: '0px', fontSize: '32px', fontWeight: 900}}>0</h1>
                                    <p className="metricsp" style={{ fontSize: '15px', color: '#21954a' }}>Area of soil conserved</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="farmMetrics">
                                    <h1 className="metricsh" style={{ marginBottom: '0px', fontSize: '32px', fontWeight: 900 }}>0</h1>
                                    <p className="metricsp" style={{ fontSize: '15px', color: '#21954a' }}>Soil Water conserved</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="farmMetrics">
                                    <h1 className="metricsh" style={{marginBottom: '0px', fontSize: '32px', fontWeight: 900,}}>0</h1>
                                    <p className="metricsp" style={{ fontSize: '15px', color: '#21954a' }}>Women Empowered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="filler-partners" className="p-5">
                    <div className="container">
                        <div className="mb-5 row">
                            <div className="text-center col">
                                <span className=" h3" style={{ color: '#21954a' }}>Supporting Organisations</span>
                            </div>
                        </div>
                        <div className="recognised row">
                            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center">
                                <img src={ILRI} alt="ILRI-logo" className="img-fluid" style={{height:"15rem", width:'350px'}}/>
                            </div>
                            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center">
                                <img src={IITA} alt="IITA-logo" className="img-fluid" style={{ height: "15rem", width: '350px' }}/>
                            </div>
                            <div className="col-lg-4 col-md-4 d-flex align-items-center justify-content-center">
                                <img src={CGIAR} alt="CGIAR-logo" className="img-fluid" style={{ height: "15rem", width: '350px' }} />
                            </div>
                        </div>
                    </div>
                </section>
                
            <CallToAction />


        </>
        )
    }
}