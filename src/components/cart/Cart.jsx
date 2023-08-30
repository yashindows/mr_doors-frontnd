import React, { useEffect, useState } from 'react'
import SectionBanner from '../section-banner/SectionBanner'
import SectionAdvs from '../section-advs/SectionAdvs'
import './cart.scss'
import CartProduct from './CartProduct'

function Cart() {
  const [data, setData] = useState([])

  fetch('http://localhost:3000/in-cart')
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
  return (
    <section className="cart">
      <SectionBanner title="Корзина" />
      <div className="cart__container">
        <div className="product-column">
          <div className="product-title">
            <span className="product__info">Товар</span>
            <span className="product__info">Цена</span>
            <span className="product__info">Кол-во</span>
            <span className="product__info">Итого:</span>
          </div>
          {data.map((data, index) => (
            <CartProduct
              key={index}
              id={data.product_id}
              name={data.product_name}
              price={data.product_price}
              img={data.product_img}
              amount={data.product_amount}
            />
          ))}
        </div>
        <div className="price-column">
          <div className="price__title">Итог</div>
          <div className="price__info">
            <span className="info__title">Итого:</span>
            <span className="info__value">
              {data.reduce((total, data) => {
                return total + data.product_amount * data.product_price
              }, 0)}
            </span>
          </div>
          <button className="price__buy">Оформить</button>
        </div>
      </div>
      <SectionAdvs />
    </section>
  )
}

export default Cart
