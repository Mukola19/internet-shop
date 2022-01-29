import { createSlice } from '@reduxjs/toolkit'
import { TypesBrandsApi } from '../../http/typesBrandsApi'
import { changeLoader } from './adminReducer'

const initialState = {
  types: {
    array:[], 
    count: null
  }, 
  brands: {
    array:[], 
    count: null
  },
}

const typesBrandsReleases = createSlice({
  name: 'typesBrandsReleases',
  initialState,
  reducers: {
    setTypesBrands: (state, { payload }) => {
      state.types.array = state.types.array.concat(payload.types.rows)
      state.types.count = payload.types.count
      state.brands.array = state.brands.array.concat(payload.brands.rows)
      state.brands.count = payload.brands.count
      
    },
    setType: (state, { payload }) => {
      state.types.array.push(payload)
      state.types.count++
    },
    setBrand: (state, { payload }) => {
      state.brands.array.push(payload)
      state.brands.count++
    },
  },
})

const { actions, reducer } = typesBrandsReleases

export const { setTypesBrands, setType, setBrand } = actions

export default reducer

export const getTypesBrands = () => async dispath => {
  dispath(changeLoader(true))
  const data = await TypesBrandsApi.getTypesBrands()
  dispath(setTypesBrands(data))
  dispath(changeLoader(false))

}

export const createType = (form, onHide) => async dispath => {
  try {
    const type = await TypesBrandsApi.createType(form)
    dispath(setType(type))
    onHide(false)
  } catch (e) {
    console.error(e)
  }
}

export const createBrand= (form,onHide) => async dispath => {
  try {
    const brand = await TypesBrandsApi.createBrand(form)
    dispath(setBrand(brand))
    onHide(false)
  } catch (e) {
    console.error(e)
  }
}
