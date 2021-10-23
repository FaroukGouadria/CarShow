import React from 'react'

function Home() {
    return(
            <div>
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <h1 className='display-6 fw-bolder text-center'>
                                Lateast Products
                            </h1>
                            <hr />
                        </div>
                    </div>
                <div className="row justify-content-center">
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4 " >
                            <img src="" className="card-img-top" alt="" height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">BMW</h5>
                                <p className="card-text lead fw-bolder">$ 1200000</p>
                                <a href="/product/:id" className="btn btn-outline-dark">By Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4 " >
                            <img src="" className="card-img-top" alt="" height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">BMW</h5>
                                <p className="card-text lead fw-bolder">$ 1200000</p>
                                <a href="/product/:id" className="btn btn-outline-dark">By Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card h-100 text-center p-4 " >
                            <img src="" className="card-img-top" alt="" height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">BMW</h5>
                                <p className="card-text lead fw-bolder">$ 1200000</p>
                                <a href="/product/:id" className="btn btn-outline-dark">By Now</a>
                            </div>
                        </div>
                    </div>
                </div>
               
                </div>
                </div>
    )
            
}

export default Home
