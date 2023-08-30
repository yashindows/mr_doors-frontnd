import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './authorization.scss'

function Authorization() {
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState('')
  axios.defaults.withCredentials = true

  const [values, setValues] = useState({
    login: '',
    password: '',
  })

  useEffect(() => {
    axios
      .get('http://localhost:3000')
      .then((res) => {
        if (res.data.Status === 'Success') {
          setAuth(true)
          setLogin(res.data.name)
          navigate('/auth')
        } else {
          setAuth(false)
        }
      })
      .catch((err) => console.log(err))
  }, [])

  const handleLogOut = () => {
    axios
      .get('http://localhost:3000/logout')
      .then((res) => {
        location.reload(true)
      })
      .catch((err) => console.log(err))
  }

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3000/login', values)
      .then((res) => {
        if (res.data.Status === 'Success') {
          setAuth(true)
          navigate('/')
        } else {
          console.log(res.data.Error)
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="authorization">
      <div className="authorization__container">
        {auth ? (
          <div className="profile">
            <div className="profile__title">You authenticated, {login}!</div>
            <button className="log-out" onClick={handleLogOut}>
              Выйти
            </button>
          </div>
        ) : (
          <div className="authorization">
            <form
              action=""
              className="authorization-form"
              onSubmit={handleSubmit}
            >
              <input
                className="login"
                type="text"
                placeholder="Введите логин"
                onChange={(e) =>
                  setValues({ ...values, login: e.target.value })
                }
              />
              <input
                className="password"
                type="password"
                placeholder="Введите пароль"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
              <input className="enter" type="submit" value="Войти" />
              <Link className="reg" to="/reg">
                Зарегистрироваться
              </Link>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
export default Authorization
