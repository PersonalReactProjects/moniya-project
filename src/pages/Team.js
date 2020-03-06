import React from 'react'
import DesmondPix from '../assets/desmond3.jpg'
import CallToAction from '../components/CallToAction'
import AdenikePix from '../assets/adenike.jpg'
import NnannaPix from '../assets/nnanna2.jpg'

export default class Team extends React.Component {
    

    render() {
        return (
            <>
                <section id="team" className="pb-5 d-flex" style={{ overflow: 'auto', margin: 'auto', minHeight: '80vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '10rem' }}>
                    <div className="container">
                        <h5 className="section-title h1">OUR TEAM</h5>
                        <div id="title-underline" style={{ backgroundColor: '#21954a', marginBottom: '50px' }}></div>

                        <div className="row">
                            {/* <!-- ./Team member -->
                            <!-- Team member --> */}
                            <div className="col-xs-12 col-lg-6 offset-lg-3">
                                <div className="image-flip">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className="card-image-top" src={DesmondPix} alt="ceo-team" /></p>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Desmond Nnajiofor</h4>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>CEO</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                                    {/* <a href="#" className="btn btn-primary btn-sm" style={{borderRadius:0}}><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Desmond Nnajiofor</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-phone"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-google"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ./Team member -->
                    </div>
                    <div className="row">
                        {/* <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="image-flip" >
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className="img-fluid" src={AdenikePix} alt="legal advisor" /></p>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Adenike J. Adebayo</h4>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Legal Advisor</h4>
                                                    <p className="card-text">Adenike is a seasoned Corporate Lawyer and Chartered Company Secretary with a LL.B from the University of Ibadan and a LL.M from the University of Lagos.</p>
                                                    {/* <a href="#" className="btn btn-primary btn-sm" style={{ borderRadius: 0 }}><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Adenike J. Adebayo</h4>
                                                    <p className="card-text">Over the last decade, Adenike worked as a counsel to a finance house and a mortgage bank before venturing out as a Governance Consultant. She currently works closely with the Corporate Boards of different organizations as well as provide company secretarial services, legal advisory and governance services to clients in different sector of the economy. </p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/adenike-j-adebayo-bl-acis-b7ab6564" rel="noopener">
                                                                <i className="fa fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-phone"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-google"></i>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ./Team member -->
                <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="image-flip">
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className=" img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_05.png" alt="Advisor" /></p>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Augustine Omwunali</h4>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Advisor</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                                    {/* <a href="#" className="btn btn-primary btn-sm" style={{ borderRadius: 0 }}><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Augustine Omwunali</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-phone"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-google"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ./Team member -->
                <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="image-flip" >
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className="img-fluid" src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_03.png" alt="Advisor" /></p>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Toyosi Olakiigbe</h4>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Advisor</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                                                    {/* <a href="#" className="btn btn-primary btn-sm" style={{ borderRadius: 0 }}><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Toyosi Olakiigbe</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="https://www.linkedin.com/in/oluwatoyosi-olakiigbe-37390640/" rel="noopener">
                                                                <i className="fa fa-linkedin"></i>
                                                            </a>
                                                        </li>
                                                        {/* <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-phone"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-google"></i>
                                                            </a>
                                                        </li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- ./Team member -->
                
                <!-- Team member --> */}
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <div className="image-flip" >
                                    <div className="mainflip">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <p><img className="img-fluid" src={NnannaPix} alt="Advisor" /></p>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Cheche Nnanna</h4>
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Advisor</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                                    {/* <a href="#" className="btn btn-primary btn-sm" style={{ borderRadius: 0 }}><i className="fa fa-plus"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="card-title" style={{ marginTop: '10px' }}>Cheche Nnanna</h4>
                                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor doloreLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-facebook"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-twitter"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-phone"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fa fa-google"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <CallToAction/>
            </>
            // onTouchStart = "this.classNameList.toggle('hover');"
    )
}
}
