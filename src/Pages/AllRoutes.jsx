
import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../Home'
import ProductList from '../Componets/ProductComponents/ProductList'

import SingleProductPage from './SingleProductPage'
import CartPage from './CartPage'
import Login from '../Componets/Login'
const AllRoutes = () => {
  return (
    <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path='/product' element={<ProductList/>}/>
       <Route path='/product/:id' element={<SingleProductPage/>}/>
       <Route path='/cart' element={<CartPage/>
       }/>

       <Route path='/Login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes