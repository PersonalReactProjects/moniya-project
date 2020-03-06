import React from 'react'
import CallToAction from '../components/CallToAction';



export default class About extends React.Component {
    
    
    render() {
        return (
        <>
        <section className="bg-light d-flex" style={{ overflow: 'auto', margin:'auto', minHeight:'100vh', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <div className="container" id="about-container" >
                {/* <!--title--> */}
                <div className="row">
                    <div className="col text-center">
                        <h1 className="mb-0">
                            About
                        </h1>
                        <div className="title-underline" style={{ backgroundColor:'#21954a'}}></div>
                        <p className="mt-2 text-capitalize text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                {/* <!--end of title--> */}

                <div className="row">
                    {/* <!--single col--> */}
                    <div className="col-md-6 col-lg-6 text-left my-4 d-flex" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <h3 style={{ color: '#21954a', }}><i className="fa fa-fighter-jet" aria-hidden="true"></i> Our Mission</h3>
                        <p className="text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>            
                    </div>
                    {/* <!--end of single col--> */}

                    {/* <!--single col--> */}
                    <div className="col-md-6 col-lg-6 text-center my-4 d-flex" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <h3 style={{ color: '#21954a', }}><i className="fa fa-bullseye" aria-hidden="true"></i> Our Vision</h3>
                        <p className="text-left">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    {/* <!--end of single col--> */}

                    {/* <!--single col--> */}
                    <div className="col-md-6 col-lg-6 text-center my-4 d-flex" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <h3 style={{ color: '#21954a' }}><i className="fa fa-pencil-square" aria-hidden="true"></i> Our Core Values</h3>
                        <p className="text-left">
                        <ul>
                            <li>Integration</li>
                            <li>Innovation</li>
                            <li>Customer Satisfaction</li>
                            <li>Leadership</li>
                            <li>Quality</li>
                        </ul>
                        </p>
                    </div>
                    {/* <!--end of single col--> */}

                    {/* <!--single col--> */}
                    <div className="col-md-6 col-lg-6 text-center my-4 d-flex" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                        <div style={{ color: '#21954a' }}>
                            <h3><i className="fa fa-bar-chart" aria-hidden="true"></i> Our Strategy</h3>
                        </div>
                        <div>
                            <p className="text-left align-self-start">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                    {/* <!--end of single col--> */}


                </div>
            </div>
        </section>
        <CallToAction />
    </> 
    )        
}
}
