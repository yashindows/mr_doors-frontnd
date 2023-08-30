import React, { useEffect, useState } from 'react'
import Card from '../../Card/Card'
import { Link } from 'react-router-dom'

function Preview() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/preview')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <section className="catalog-preview">
      <div className="preview__container">
        <div className="preview__title">Наши товары</div>
        <div className="preview-row">
          {data.map((data, index) => (
            <Card
              key={index}
              id={data.product_id}
              name={data.product_name}
              category={data.product_category}
              price={data.product_price}
              img={data.product_img}
            />
          ))}
        </div>
        <Link to="/catalog" className="preview__link">
          Больше
        </Link>
      </div>
    </section>
  )
}

export default Preview
