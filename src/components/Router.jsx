import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './main/Main'
import Catalog from './catalog/Catalog'
import Header from './header/Header'
import Footer from './footer/Footer'
import Products from './product/Products'
import Authorization from './authorization/Authorization'
import Registration from './authorization/Registration'
import Cart from './cart/Cart'
import Kitchen from './categories/Kitchen'
import LivingRooms from './categories/LivingRooms'
import Bedrooms from './categories/Bedrooms'
import Favorite from './favorite/Favorite'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Main />
              <Footer />
            </>
          }
          path="/"
        />
        <Route
          element={
            <>
              <Header />
              <Catalog />
              <Footer />
            </>
          }
          path="/catalog"
        />
        <Route
          element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          }
          path={'/product/:id'}
        />
        <Route
          element={
            <>
              <Header />
              <Authorization />
              <Footer />
            </>
          }
          path="/auth"
        />
        <Route
          element={
            <>
              <Header />
              <Registration />
              <Footer />
            </>
          }
          path="/reg"
        />
        <Route
          element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
          }
          path="/cart"
        />
        <Route
          element={
            <>
              <Header />
              <Kitchen />
              <Footer />
            </>
          }
          path="/kitchens"
        />
        <Route
          element={
            <>
              <Header />
              <LivingRooms />
              <Footer />
            </>
          }
          path="/rooms"
        />
        <Route
          element={
            <>
              <Header />
              <Bedrooms />
              <Footer />
            </>
          }
          path="/bedrooms"
        />
        <Route
          element={
            <>
              <Header />
              <Favorite />
              <Footer />
            </>
          }
          path="/favorite"
        />
        <Route
          element={
            <>
              <Header />
              <div className="not-found__container"> Not Found </div>
              <Footer />
            </>
          }
          path="/*"
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
