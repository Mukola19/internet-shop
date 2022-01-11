import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import user from './reducer/userReducer'
import typesBrands from './reducer/typesBrandsReducer'
import devices from './reducer/devicesReducer'


 
const reducer = combineReducers({
    user,
    typesBrands,
    devices
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


