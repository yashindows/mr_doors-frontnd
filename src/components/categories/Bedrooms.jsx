import React, { useState } from 'react'
import SectionAdvs from '../section-advs/SectionAdvs'
import SectionBanner from '../section-banner/SectionBanner'
import Card from '../Card/Card'

function Bedrooms() {
  const [data, setData] = useState([])
  fetch('http://localhost:3000/bedrooms')
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch((err) => console.log(err))
  return (
    <>
      <section className="catalog">
        <SectionBanner title="Спальни" />

        <div className="catalog__container">
          <div className="catalog-row">
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
        </div>
        <SectionAdvs />
      </section>
    </>
  )
}

export default Bedrooms
