import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/Nav/NavBar'
import { Routers } from './components/Routers'

const App = () => {

  const data = {
    isAuth:true,
    isAdmin: true
  }

 return <div>
    <BrowserRouter>
      <NavBar {...data}/>
      <Routers  {...data}/>
    </BrowserRouter>
  </div>
}

export default App
