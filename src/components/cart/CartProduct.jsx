import React from 'react'
import './cart-product.scss'
import axios from 'axios'

function CartProduct(props) {
  const handleDelete = () => {
    axios.post(`http://localhost:3000/delete/${props.id}`)
  }
  return (
    <div className="cart-product">
      <div className="product__face">
        <img src={props.img} alt="" className="product__img" />
        <div className="product__name">{props.name}</div>
      </div>
      <div className="product__price">{props.price}</div>
      <div className="product__amount">{props.amount}</div>
      <div className="product__total">
        {props.price * props.amount}{' '}
        <button className="delete-btn" onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  )
}

export default CartProduct
