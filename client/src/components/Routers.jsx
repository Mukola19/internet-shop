import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

export const Routers = ({ isAuth, isAdmin }) => {
  if (isAuth)
    <Routes>
      <Route path='/basket' element={<>{'basket'}</>} />
      <Route path='*' element={<Navigate to='/shop' />} />
    </Routes>


  else if (isAdmin)
    <Routes>
      <Route path='/management' element={<>{'management'}</>} />
      <Route path='*' element={<Navigate to='/shop' />} />
    </Routes>


  else
    <Routes>
      <Route path='/shop' element={<>{'vshop'}</>} />
      <Route path='/device' element={<>{'device'}</>} />
      <Route path='*' element={<Navigate to='/shop' />} />
    </Routes>
}
