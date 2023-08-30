import React from 'react'
import { Link } from 'react-router-dom'

function Category(props) {
  return (
    <div className="categories-card">
      <Link to={props.path} className="category__link"></Link>
      <img src={props.src} alt="" className="category__img" />
      <div className="category__title">{props.title}</div>
    </div>
  )
}

export default Category
