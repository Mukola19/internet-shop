import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/Nav/NavBar'
import { Routers } from './components/Routers'
import { getDevices } from './store/reducer/devicesReducer'
import { getTypesBrands } from './store/reducer/typesBrandsReducer'
import { authMe } from './store/reducer/userReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)



  useEffect(() => {
    dispatch(authMe())
    dispatch(getTypesBrands())
    dispatch(getDevices())
    
  },[])

 return <div>
    <BrowserRouter>
      <NavBar {...user}/>
      <Routers  {...user}/>
    </BrowserRouter>
  </div>
}

export default App
