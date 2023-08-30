import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import './authorization.scss'

function Registration() {
  const [values, setValues] = useState({
    password: '',
  })

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post('http://localhost:3000/register', values)
      .then((res) => {
        if (res.data.Status === 'Success') {
          navigate('/auth')
        } else {
          alert('Error')
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className="authorization">
      <div className="authorization__container">
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
              onChange={(e) => setValues({ ...values, login: e.target.value })}
            />
            <input
              className="password"
              type="password"
              placeholder="Введите пароль"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <input className="enter" type="submit" value="Зарегистрироваться" />
            <Link className="reg" to="/auth">
              Войти
            </Link>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Registration
