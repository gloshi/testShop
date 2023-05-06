import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import { ROUTES } from '../utils/ROUTES'
import Cart from '../components/Cart'

const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<Home/>} />
        <Route path={ROUTES.CART}  element={<Cart />} />
    </Routes>
  )
}

export default AppRoutes