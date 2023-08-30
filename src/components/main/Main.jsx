import React from 'react'
import Banner from './banner/Banner'
import Categories from './categories/Categories'
import Preview from './catalog-preview/Preview'
import Slider from './slider/Slider'
import MrDoorsFurniture from './mr-doors-furniture/MrDoorsFurniture'

function Main() {
  return (
    <>
      <main className="main">
        <Banner />
        <Categories />
        <Preview />
        <Slider />
        <MrDoorsFurniture />
      </main>
    </>
  )
}

export default Main
