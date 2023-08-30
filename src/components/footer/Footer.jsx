import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer-info">
          <div className="column-main">
            <span className="logotype">mr.Doors</span>
            <span className="address">
              ул. Балябина, д. 16, Чита, Забайкальский край, Россия
            </span>
          </div>
          <div className="column-links">
            <div className="column-secondary">
              <div className="column__title">Ссылки</div>
              <ul className="menu-list">
                <li className="menu__item">
                  <Link to="/" className="menu__link">
                    Главная
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/catalog" className="menu__link">
                    Магазин
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/about" className="menu__link">
                    О нас
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/contacts" className="menu__link">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column-secondary">
              <div className="column__title">Помощь</div>
              <ul className="menu-list">
                <li className="menu__item">
                  <Link to="" className="menu__link">
                    Условия оплаты
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="" className="menu__link">
                    Возвраты
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="" className="menu__link">
                    Политика конфиденциальности
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-rights">2023 mr.Doors Все права защищены</div>
      </div>
    </footer>
  )
}

export default Footer
