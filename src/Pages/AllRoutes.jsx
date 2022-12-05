

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from './CartPage'
import HomePage from './HomePage'
import TopNav from '../Componets/Navbar/TopNav';
import Account from '../Componets/Account'
import MyOrders from './MyOrders'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/customer' element={<MyOrders/>}>
          <Route path='orders' element={<Orders/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='notification' element={<Notification/>}/>
          <Route path='address' element={<Box>Address Book</Box>}/>
          <Route path='prescription' element={<Box>My Prescription</Box>}/>
          <Route path='cards' element={<Box>Saved Cards</Box>}/>
          <Route path='voucher' element={<Box>Check Voucher balance</Box>}/>
          <Route path='credit' element={<Box>Store credit</Box>}/>
        </Route>
          <Route path='/product/:id' element={<SingleProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
    </Routes>
  )
}

export default AllRoutes