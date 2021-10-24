import React from 'react'

function Login() {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto ms-2 me-2" data-bs-toggle="modal" data-bs-target="#loginModal">
                LOGIN
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">LOGIN</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="model-body m-2">
                            <button className="btn btn-primary w-100  mb-4 "><span><i className='fa fa-google me-2'/></span>Sign in with Google</button>
                            <button className="btn btn-primary w-100 mb-4 "><span><i className='fa fa-facebook me-2' /></span>Sign in with Facebook</button>
                        </div>
                        <form className='m-2'>
                            <div class="mb-3  ">
                                <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            
                        </form>
                        <div className="modal-footer m-2">
                            <button type="button" className="btn btn-outline-primary w-100 mt-4">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
