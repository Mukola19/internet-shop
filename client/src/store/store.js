import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from './reducer/userReducer'
import types from './reducer/typesReducer'


 
const reducer = combineReducers({
    user,
    types
})


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


