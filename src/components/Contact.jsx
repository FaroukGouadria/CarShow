import React from 'react'

function Contact() {
    return (
        <div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 text-center ">
                        <h1>Have Some Question ? </h1>
                        <hr />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6 mb-5">
                        <form id="contact-form" method="POST">
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Phone Number</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" rows="5"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-3">Send</button>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact
