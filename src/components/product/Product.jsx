import React, { useState } from 'react'
import './product.scss'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Product(props) {
  const [auth, setAuth] = useState(false)
  axios.defaults.withCredentials = true
  const [count, setCount] = useState(1)

  const values = {
    name: props.name,
    price: props.price,
    amount: count,
  }

  axios
    .get('http://localhost:3000')
    .then((res) => {
      if (res.data.Status === 'Success') {
        setAuth(true)
      } else {
        setAuth(false)
      }
    })
    .catch((err) => console.log(err))

  const handleAddToCart = () => {
    axios
      .post(`http://localhost:3000/add${window.location.pathname}`, values)
      .then((data) => console.log(data))
  }

  const handleAddToFavorite = () => {
    axios
      .post(`http://localhost:3000/add-favorite${window.location.pathname}`)
      .then((data) => console.log(data))
  }

  return (
    <div className="product-main">
      <img src={props.img} alt="" className="product__img" />
      <div className="product-actions">
        <div className="product__title">{props.name}</div>
        <div className="product__price">
          <span>{props.price}</span>
        </div>
        <div className="product__category">
          <span>{props.category}</span>
        </div>
        <div className="product-buy">
          <div className="buy-counter">
            <button
              className="counter__action"
              onClick={() =>
                setCount((count) => (count > 1 ? count - 1 : count))
              }
            >
              -
            </button>
            <div className="counter__current">
              <span>{count}</span>
            </div>
            <button
              className="counter__action"
              onClick={() => setCount((count) => count + 1)}
            >
              +
            </button>
          </div>
          {auth ? (
            <>
              <button className="add-to add-to-cart" onClick={handleAddToCart}>
                Добавить в корзину
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="add-to add-to-cart">
                Добавить в корзину
              </Link>
            </>
          )}
          <button
            className="add-to add-to-favorite"
            onClick={handleAddToFavorite}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16668 3.5C4.94551 3.5 2.33334 6.08533 2.33334 9.275C2.33334 11.8498 3.35418 17.9608 13.4027 24.1383C13.5827 24.2479 13.7893 24.3058 14 24.3058C14.2107 24.3058 14.4173 24.2479 14.5973 24.1383C24.6458 17.9608 25.6667 11.8498 25.6667 9.275C25.6667 6.08533 23.0545 3.5 19.8333 3.5C16.6122 3.5 14 7 14 7C14 7 11.3878 3.5 8.16668 3.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
