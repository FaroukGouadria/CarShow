import React from 'react'

function Register() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto ms-2 me-2" data-bs-toggle="modal" data-bs-target="#registerModal">
                REGISTER
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="registerModelLabel">REGISTER</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form className='m-2'>
                            <div className="mb-3  ">
                                <label htmlFor="exampleInputtext" className="form-label">UserName</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="texthelper" />
                            </div>
                            <div className="mb-3  ">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3  ">
                                <label htmlFor="exampleInputnumber" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleInputphone" aria-describedby="numberhelper" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>

                        </form>
                        <div className="modal-footer m-2">
                            <button type="button" className="btn btn-outline-primary w-100 mt-4">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
