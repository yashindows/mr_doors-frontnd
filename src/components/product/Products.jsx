import React, { useEffect, useState } from 'react'
import Product from './Product'

function Products() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000${window.location.pathname}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <section className="product">
      <div className="product__container">
        {data.map((data, index) => (
          <Product
            key={index}
            name={data.product_name}
            price={data.product_price}
            category={data.product_category}
            img={`../${data.product_img}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Products
