import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userAdmin from './reducer/adminReducer'
import user from './reducer/usersReducer'
import typesBrands from './reducer/typesBrandsReducer'
import devices from './reducer/devicesReducer'
import basket from './reducer/basketReducer'


 
const reducer = combineReducers({
    userAdmin,
    user,
    typesBrands,
    devices,
    basket
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


