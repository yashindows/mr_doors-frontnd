import React, { useState, useEffect } from 'react'
import SectionBanner from '../section-banner/SectionBanner'
import Card from '../Card/Card'
import SectionAdvs from '../section-advs/SectionAdvs'
import './catalog.scss'

function Favorite() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/favorite')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  }, [])
  return (
    <main className="main">
      <SectionBanner title="Избранное" />
      <section className="catalog">
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
    </main>
  )
}

export default Favorite
