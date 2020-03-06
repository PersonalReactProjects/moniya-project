import React from 'react';
import CallToAction from '../components/CallToAction'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className="section full-height">
                        <div className="absolute-center">
                            <div className="section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <h1 className="text-danger">Error<br /></h1>
                                            <p>Something Happened...Reload Please</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CallToAction />
                </>
            );
        }

        return this.props.children;
    }
}

