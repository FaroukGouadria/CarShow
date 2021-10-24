import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data'

function ProductDetail() {
    const [cartbtn, setCartBtn] = useState("Add To Cart");
    const prodId = useParams();
    const prodDetail = DATA.filter(x => x.id == prodId.id);
    const product = prodDetail[0];

    const handleCart = (product) => {
        if (cartbtn === "Add To Cart") {
            setCartBtn('Remove From Cart')
        } else {
            setCartBtn("Add To Cart")
        }
    }


    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto  product ">
                        <img src={product.img} alt={product.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className='display-5 fw-bold'> {product.title}</h1>
                        <hr />
                        <h2 className='my-4'>{product.price}</h2>
                        <p className='lead'>{product.desc}</p>
                        <button onClick={() => handleCart(product)} className='btn btn-outline-primary my-5'>{cartbtn}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
