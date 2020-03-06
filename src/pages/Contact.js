import React from 'react'
import CallToAction from '../components/CallToAction'
import  firebase from 'firebase/app';
import 'firebase/firestore';
import  'firebase/analytics';
import swal from 'sweetalert';


export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputFullname: "",
            inputEmail: "",
            inputSubject: "",
            inputPhonenumber: "",
            inputMessage: "",
            inputButton:'Send'
        }
    }
    storeInputvalueHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitFormHandler = (e) => {
        const { inputEmail, inputFullname, inputMessage, inputSubject, inputPhonenumber } = this.state
        e.preventDefault()
        // display the wait message if network is not detected and to also disable the submit button
        document.querySelector('.waiting-email').style.display ="block"
        document.querySelector('.waiting-text').style.display = "block"
        this.setState({ inputButton: 'Please Wait...' });
        document.querySelector('.btn-outline-success-send').style.cursor = "not-allowed";
        document.querySelector('#mySubmitButton').setAttribute("disabled", "true");
        
        
        // To check if hidden input is filled to detect spam bots
        var hiddenInput = document.querySelector('#inputHidden').value

        if (hiddenInput !== "") {
            swal({
                title: "Try Harder!!!",
                text: "Gotcha No Spam Bots Allowed!",
                icon: "error",
                button: {
                    text: "Sorry my bad",
                    value: true,
                    visible: true,
                    className: "alert-button-danger",
                    closeModal: true,
                },
            });
            // returns the wait message to being invisible, enabling the button and changing the value
            document.querySelector('.waiting-email').style.display = "none"
            document.querySelector('.waiting-text').style.display = "none"
            return
        }

        // to check if there is url or any form of hyperlink in all the inputs
        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

        var regex = new RegExp(expression);
        
        if (inputEmail.match(regex) || inputFullname.match(regex) || inputSubject.match(regex) || inputPhonenumber.match(regex) || inputMessage.match(regex)) {
            swal({
                title: "Gotcha! URL (website address) is not allowed!",
                text: `Check your inputs.
                One or more of your inputs contain hyperlinks`,
                icon: "error",
                button: {
                    text: "Sorry my bad",
                    value: true,
                    visible: true,
                    className: "alert-button-danger",
                    closeModal: true,
                },
            });;
            document.querySelector('.waiting-email').style.display = "none"
            document.querySelector('.waiting-text').style.display = "none"
            return
        } 

        // Your web app's Firebase configuration
        const db = firebase.firestore()
        const firstName = this.state.inputFullname.split(" ")[0]
        
        db.collection("contact-users").add({
            email: inputEmail,
            fullname: inputFullname,
            message: inputMessage,
            phonenumber: inputPhonenumber,
            subject: inputSubject,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(()=> {
            swal({
                title: `Thank you ${firstName} for reaching out to us`,
                text: "Your Email has been sent and will be given urgent attention",
                icon: "success",
                button: {
                    text: "OK",
                    value: true,
                    visible: true,
                    className: "alert-button",
                    closeModal: true,
                },
            })
            document.querySelector('.waiting-email').style.display = "none";
            document.querySelector('.waiting-text').style.display = "none";
            document.querySelector('.btn-outline-success-send').value = "Send";
            document.querySelector('.btn-outline-success-send').style.cursor = "pointer";
            document.querySelector('#mySubmitButton').removeAttribute("disabled");

            console.log(this.state) 
        })
            
        .catch((error)=> {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error); 
        }); 
        
        this.setState({
            inputFullname: "",
            inputEmail: "",
            inputSubject: "",
            inputPhonenumber: "",
            inputMessage: "",
        })
    }
    

    render() {
        return (
            <>
                <section className="bg-light d-flex" style={{ overflow: 'auto', margin: 'auto', minHeight: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="container" id="about-container" >
                        {/* <!--title--> */}
                        <div className="row">
                            <div className="col text-center">
                                <h1 className=" mb-0">Contact Us</h1>
                                <div className="title-underline" style={{ backgroundColor: '#21954a' }}></div>
                                <p className="mt-2 text-capitalize text-center mb-5">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                            </div>
                        </div>
                        {/* <!--end of title--> */}
                        <div className="row">
                            {/* <!--single col--> */}
                            <div className="col-md-6 col-lg-6 text-left">

                                <form className="contact-form" onSubmit={this.submitFormHandler } id="admin-div-form">
                                    <div className="form-group">
                                        <label htmlFor="inputFullname">Full Name</label>
                                        <input type="text" className="form-control" id="inputFullname" placeholder="Full Name" required onChange={this.storeInputvalueHandler} value={this.state.inputFullname} title="We need your name to address you personally"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="hidden" className="form-control" id="inputHidden" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" required onChange={this.storeInputvalueHandler} value={this.state.inputEmail} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="We need your Email to send you a reply"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputSubject">Subject</label>
                                        <input type="text" className="form-control" id="inputSubject" placeholder="Let's know what you want to talk about" required onChange={this.storeInputvalueHandler} value={this.state.inputSubject}
                                        title="Lets know what you want to talk about"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputPhonenumber">Phone Number</label>
                                        <input type="tel" className="form-control" id="inputPhonenumber" placeholder="Phone Number" required min="7" onChange={this.storeInputvalueHandler} value={this.state.inputPhonenumber}
                                        title="We would love to reach out sometimes"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputMessage">Message</label>
                                        <textarea type="text" className="form-control" id="inputMessage" placeholder="Let's hear from you" required onChange={this.storeInputvalueHandler} value={this.state.inputMessage}
                                        title="Your feedback is important to us"
                                        />
                                        <small id="emailHelp" className="form-text" style={{color: '#21954a'}}>We'll never share your details or message with anyone else.</small>
                                    </div>

                                    <div className="form-group d-flex align-items-center justify-content-center" style={{ flexDirection: 'column', }}>
                                        {/* loader please do not edit */}
                                        <div className="loadingio-spinner-dual-ring-6v5ag416uf4 waiting-email" style={{ display: 'none' }}>
                                            <div className="ldio-a78yqu4icuo">
                                                <div></div>
                                                <div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* loader ends here */}
                                        <div>
                                            <p className="waiting-text text-center mb-3" style={{ color: '#21954a', display: 'none' }}>Please make sure your internet connection is switched on. your message will be sent as soon as network connection is restored. Please do not resend message or refresh your browser</p>
                                        </div>
                                    </div>

                                    <div className="form-group pb-5">
                                        <input type="submit" value={this.state.inputButton} className="form-control btn-outline-success btn-outline-success-send" id="mySubmitButton"/>
                                    </div>

        
                                </form>

                            </div>
                            {/* <!--end of single col--> */}

                            {/* <!--single col--> */}
                            <div className="col-md-6 col-lg-6 text-center my-4 d-flex" style={{ alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                                <h3 style={{ color: '#21954a', }}><i className="fa fa-envelope" aria-hidden="true"></i> Get in touch</h3>
                                <p className="text-left mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam.</p>
                                <span className="mb-2"><span className="fa fa-envelope mr-2" style={{ color: '#21954a', }}></span> info@moniya.com.ng</span>
                                <span className="mb-2"><span className="fa fa-map-marker mr-2" style={{ color: '#21954a', }}></span>Moniya, Ibadan, Oyo State</span>
                                <span className="mb-2"><span className="fa fa-phone mr-2" style={{ color: '#21954a', }}></span> +234(0)703-884-2080</span>
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
