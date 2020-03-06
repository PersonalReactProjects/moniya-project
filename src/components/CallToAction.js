import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Typed from 'typed.js'
import $ from 'jquery'


export default class CallToAction extends Component {
    componentDidMount() {
        
        if ($('.text-slider-action').length === 1) {
            var typed_strings = $('.text-slider-items-action').text();
            new Typed('.text-slider-action', {
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
            <section id="filler" className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-12 mx-auto text-center align-items-center justify-content-center">
                            <h1>Order Moniya Ventures Products</h1>
                            <p className="lead text-center text-light">Looking to purchase High Quality Cassava peel-<strong className="text-slider-action"></strong></p>
                            <p className="intro-subtitle lead text-left"><span className="text-slider-items-action" style={{ display: 'none' }}>Fine ?,Coarse ?</span></p>
                            <Link to="/" className="btn btn-lg btn-outline-success m-2 text-capitalize" style={{ borderRadius: 0 }}>Click to order</Link>
                        </div>
                    </div>
                </div>
            </section>    
        )
    }
}
