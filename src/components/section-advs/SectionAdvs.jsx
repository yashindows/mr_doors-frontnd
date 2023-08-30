import React from 'react'
import './section-advs.scss'

function SectionAdvs() {
  return (
    <section className="advantages">
      <div className="adv-box">
        <img
          src="src/assets/img/icons/advs/trophy_1.svg"
          alt=""
          className="box__img"
        />
        <div className="box-info">
          <div className="box__title">Высокое качество</div>
          <div className="box__description">Лучшие материалы</div>
        </div>
      </div>
      <div className="adv-box">
        <img
          src="src/assets/img/icons/advs/guarantee.svg"
          alt=""
          className="box__img"
        />
        <div className="box-info">
          <div className="box__title">Гаратния</div>
          <div className="box__description">12 лет на кухни</div>
        </div>
      </div>
      <div className="adv-box">
        <img
          src="src/assets/img/icons/advs/shipping.svg"
          alt=""
          className="box__img"
        />
        <div className="box-info">
          <div className="box__title">Доставка бесплатно</div>
          <div className="box__description">При заказе от 10 тыс.</div>
        </div>
      </div>
      <div className="adv-box">
        <img
          src="src/assets/img/icons/advs/customer-support.svg"
          alt=""
          className="box__img"
        />
        <div className="box-info">
          <div className="box__title">24 / 7 Поддержка</div>
          <div className="box__description">По обслуживанию</div>
        </div>
      </div>
    </section>
  )
}

export default SectionAdvs
