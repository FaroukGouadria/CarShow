import React from 'react'
import {Link} from "react-router-dom"
function CarteBtn() {
    return (
        <div>
           <Link to="/cart" className='btn btn-outline-primary ms-2'>
               <span className='fa fa-shopping-cart'></span> Cart (0)
           </Link>
        </div>
    )
}

export default CarteBtn
