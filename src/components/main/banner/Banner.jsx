import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">
        <div className="banner-info">
          <div className="banner__topTitle">Новое поступление</div>
          <div className="banner__title">Ознакомьтесь с новой коллекцией</div>
          <div className="banner__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </div>
          <Link to="/catalog" className="banner__btn">
            в магазин
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Banner
