import React from "react"
import { BrowserRouter } from "react-router-dom"
import { NavBar } from "./components/Nav/NavBar"
import { Routers } from "./components/Routers"

const App = () => (
  <BrowserRouter>
    <NavBar/>
    <Routers />
  </BrowserRouter>
)

export default App
