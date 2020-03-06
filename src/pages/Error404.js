import React from 'react'
import { Link } from 'react-router-dom'
import CallToAction from '../components/CallToAction'

export default class Error404 extends React.Component {
    render(){
        return (
            <>
                <div className="section" style={{minHeight:'80vh'}}>
                    <div className="absolute-center">
                        <div className="section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h1>FOUR OH FOUR<br /></h1>
                                        <p>Nice one! Now go back <Link to='/' style={{ color:"#21954a"}}>Home</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CallToAction />

            </>
        )
    }
}
