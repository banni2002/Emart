import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { delCart } from '../redux/action'

const Cart = () => {

  const state = useSelector((state)=> state.addCart)
  const dispatch = useDispatch()

  const cartItems = (product) =>{
    return(
      <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
        <div className="container">
          <button className="btn-close float-end" aria-label="Close">

          </button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={product.img} alt={product.title} />
            </div>
            <div className="col-md-4">
              <h3></h3>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <>
   
    
    </>
  )
}

export default Cart