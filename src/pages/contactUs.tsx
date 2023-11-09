import React from 'react';
import Navigation from '../layouts/navigation';
import Footer from '../layouts/footer';

// Add a form here? Possibly for email inquiries

function ContactUs() {
    return (
        <div className="entire-container" style={{ textAlign: 'center' }}>
            <div className="container">
                <Navigation />
            </div>
            <div className="container">
                <h1 style={{ textAlign: 'center' }}>Contact Us!</h1>
            </div>
            <div className="container">
                <div className="card bg-light">
                    {/* <form> className="needs-validation" novalidate */}
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputFirstName">First Name</label>
                                <input type="firstName" className="form-control" id="inputFirstName" placeholder="First Name"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputLastName">Last Name</label>
                                <input type="lastName" className="form-control" id="inputLastName" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputEmail">Email</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputPhoneNumber">Phone Number</label>
                                <input type="phoneNumber" className="form-control" id="inputPhoneNumber" placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputTextArea">Tell Us!</label>
                                <textarea className="form-control" id="inputTextArea"></textarea>
                            </div>
                        </div>
                        <div className="container">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;