import React from 'react'
import Category from './Category'

function Categories() {
  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__title">Выбирайте среди категорий </div>
        <div className="categories_subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="categories-row">
          <Category
            title="Столовые"
            src="img/categories/kitchens.png"
            path="/kitchens"
          />
          <Category
            title="Жилые зоны"
            src="img/categories/living_rooms.png"
            path="/rooms"
          />
          <Category
            title="Спальни"
            src="img/categories/bedrooms.png"
            path="/bedrooms"
          />
        </div>
      </div>
    </section>
  )
}

export default Categories
