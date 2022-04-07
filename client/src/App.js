import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Loading } from './commons/Loading/Loading'
import { ErrorMessage } from './commons/ErrorMessage/ErrorMessage'
import { NavBar } from './components/Nav/NavBar'
import { Routers } from './components/Routers'
import { authMe } from './store/reducer/userReducer'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(authMe())
  }, [])

  if (user.initialize || !user.isLoading) {
    return (
      <div>
        <BrowserRouter>
          <NavBar {...user} />
          <Routers {...user} />
        </BrowserRouter>
        {user.isError ? <ErrorMessage isError={user.isError} /> : null}
      </div>
    )
  }
  return <Loading />
}

export default App
