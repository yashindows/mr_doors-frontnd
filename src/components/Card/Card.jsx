import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './card.scss'
import axios from 'axios'

function Card(props) {
  const [auth, setAuth] = useState(false)
  axios.defaults.withCredentials = true

  const values = {
    name: props.name,
    price: props.price,
    amount: 1,
  }
  const handleAddToCart = () => {
    axios
      .post(`http://localhost:3000/add/product/${props.id}`, values)
      .then((data) => console.log(data))
  }

  const handleAddToFavorite = () => {
    axios.post(`http://localhost:3000/add-favorite/product/${props.id}`)
  }
  const handleDeleteFromFavorite = () => {
    axios.post(`http://localhost:3000/delete-favorite/product/${props.id}`)
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
  const [hover, setHover] = useState(false)

  const handleMouseOver = () => {
    setHover(true)
  }
  const handleMouseOut = () => {
    setHover(false)
  }
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="card"
    >
      {hover && (
        <div className="card-menu">
          <Link to={`/product/${props.id}`} className="card__link"></Link>
          {auth ? (
            <>
              {' '}
              <button className="menu__btn" onClick={handleAddToCart}>
                В корзину
              </button>
              <div className="menu-links">
                <button onClick={handleAddToFavorite} className="menu__link">
                  Нравится
                </button>
                <button
                  onClick={handleDeleteFromFavorite}
                  className="menu__link"
                >
                  Не нравится
                </button>
              </div>
            </>
          ) : (
            <>
              {' '}
              <Link to="/auth" className="menu__btn">
                В корзину
              </Link>
              <div className="menu-links">
                <Link to="/auth" className="menu__link">
                  Нравится
                </Link>
                <Link to="/auth" className="menu__link">
                  Не нравится
                </Link>
              </div>
            </>
          )}
        </div>
      )}

      <img src={props.img} alt="" className="card__img" />
      <div className="card__title">{props.name}</div>
      <div className="card__category">{props.category}</div>
      <div className="card__price">
        <span>{props.price}</span>
      </div>
    </div>
  )
}

export default Card
