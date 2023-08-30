import React, { useEffect, useState } from 'react'
import logo from '/img/logo.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Header() {
  const [auth, setAuth] = useState(false)
  axios.defaults.withCredentials = true

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
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" />
        </Link>
        <ul className="menu-body">
          <li className="menu__item">
            <Link to="/" className="menu__link">
              Главная
            </Link>
          </li>
          <li className="menu__item">
            <Link to="/catalog" className="menu__link">
              Каталог
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
        <ul className="menu-user-actions">
          <li className="user-actions__item">
            <Link to="/auth" className="user-actions__link">
              <img
                src="/img/icons/account-icon_unregistred.svg"
                alt="Авторизация"
              />
            </Link>
          </li>
          <li className="user-actions__item">
            {auth ? (
              <>
                {' '}
                <Link to="/favorite" className="user-actions__link">
                  <img src="/img/icons/favorite-icon.svg" alt="Избранное" />
                </Link>
              </>
            ) : (
              <>
                {' '}
                <Link to="/auth" className="user-actions__link">
                  <img src="/img/icons/favorite-icon.svg" alt="Избранное" />
                </Link>
              </>
            )}
          </li>
          <li className="user-actions__item">
            {auth ? (
              <>
                {' '}
                <Link to="/cart" className="user-actions__link">
                  <img src="/img/icons/cart-icon.svg" alt="Корзина" />
                </Link>
              </>
            ) : (
              <>
                {' '}
                <Link to="/auth" className="user-actions__link">
                  <img src="/img/icons/cart-icon.svg" alt="Корзина" />
                </Link>
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
