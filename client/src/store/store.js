import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from './reducer/userReducer'



const reducer = {
    user
}


const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
})

export const store = configureStore({
 reducer,
 middleware,
 devTools: process.env.NODE_ENV !== 'production',
})