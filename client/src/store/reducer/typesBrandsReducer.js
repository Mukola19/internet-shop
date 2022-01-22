import { createSlice } from '@reduxjs/toolkit'
import { typesBrandsApi } from '../../http/typesBrandsApi'
import { changeLoader } from './userReducer'

const initialState = {
  types: [],
  brands: [],
}

const typesBrandsReleases = createSlice({
  name: 'typesBrandsReleases',
  initialState,
  reducers: {
    setTypesBrands: (state, { payload }) => {
      state.types = state.types.concat(payload.types)
      state.brands = state.brands.concat(payload.brands)
    },
    setType: (state, { payload }) => {
      state.types.push(payload)
    },
    setBrand: (state, { payload }) => {
      state.brands.push(payload)
    },
  },
})

const { actions, reducer } = typesBrandsReleases

export const { setTypesBrands, setType, setBrand } = actions

export default reducer

export const getTypesBrands = () => async dispath => {
  dispath(changeLoader(true))
  const data = await typesBrandsApi.getTypesBrands()
  dispath(setTypesBrands(data))
  dispath(changeLoader(false))

}

export const createType = (form) => async dispath => {
  try {
    const type = await typesBrandsApi.createType(form)
    dispath(setType(type))
  } catch (e) {
    console.error(e)
  }
}

export const createBrand= (form) => async dispath => {
  try {
    const brand = await typesBrandsApi.createBrand(form)
    dispath(setBrand(brand))
  } catch (e) {
    console.error(e)
  }
}
