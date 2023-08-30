import React, { useRef, useState, useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import './slider.css'

// import required modules
import { Navigation } from 'swiper/modules'

function Slider() {
  return (
    <section className="slider">
      <div className="slider__container">
        <div className="slider-info">
          <div className="slider__title">50+ Красивых вдохновляющих комнат</div>
          <div className="slider__text">
            Дизайнер уже подготовил много красивых прототипов комнат, которые
            вдохновят Вас
          </div>
          <Link to="/catalog" className="slider__link">
            Подробнее
          </Link>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src="/img/products/1.webp" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/products/2.webp" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Slider
