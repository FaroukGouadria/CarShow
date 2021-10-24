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
                            <div class="mb-3  ">
                                <label htmlFor="exampleInputtext" class="form-label">UserName</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="texthelper" />
                            </div>
                            <div class="mb-3  ">
                                <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3  ">
                                <label htmlFor="exampleInputnumber" class="form-label">Phone</label>
                                <input type="number" class="form-control" id="exampleInputphone" aria-describedby="numberhelper" />
                            </div>
                            <div class="mb-3">
                                <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
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
