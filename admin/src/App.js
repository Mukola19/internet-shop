import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import { Links } from "./components/Links"
import { Routers } from "./components/Routers"
import st from "./App.module.scss"
import { Header } from "./components/Header/Header"
import { useDispatch, useSelector } from "react-redux"
import { authMe } from "./store/reducer/adminReducer"

const App = () => {
  const admin = useSelector(state => state.userAdmin)
  const dispatch = useDispatch()
  useEffect(() => {
console.log(admin);
    dispatch(authMe())
  }, [])
  return (
    <BrowserRouter>
      <div className={st.app}>
        <Header {...admin}/>
        <Links />
        <Routers isAdmin={admin.admin} />
      </div>
    </BrowserRouter>
  )
}

export default App
