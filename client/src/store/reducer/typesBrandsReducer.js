import { createSlice } from '@reduxjs/toolkit'
import { TypesBrandsApi } from '../../http/typesBrandsApi'
import { changeLoader } from './userReducer'
import { getDevices } from './devicesReducer'

const initialState = {
  types: [],
  brands: [],
  activeType: null,
  activeBrand: null,
}

const typesBrandsReleases = createSlice({
  name: 'typesBrandsReleases',
  initialState,
  reducers: {
    setTypesBrands: (state, { payload }) => {
      state.types = state.types.concat(payload.types.rows)
      state.brands = state.brands.concat(payload.brands.rows)
    },
    changeActive: (state, { payload }) => {
      state.activeType = payload.typeId
      state.activeBrand = payload.brandId
    },
  },
})

const { actions, reducer } = typesBrandsReleases

export const { setTypesBrands, setType, setBrand, changeActive } = actions

export default reducer

export const getTypesBrands = () => async (dispath) => {
  dispath(changeLoader(true))
  const data = await TypesBrandsApi.getTypesBrands()
  dispath(setTypesBrands(data))
  dispath(changeLoader(false))
}

export const receiptDevices =
  ({ typeId, brandId }) =>
  async (dispath, getState) => {
    const { activeType, activeBrand } = getState().typesBrands
    if (typeId || typeId === null) {
      dispath(getDevices(typeId, activeBrand, 1))
      dispath(changeActive({ typeId, brandId: activeBrand }))
    } else if (brandId || brandId=== null) {
      dispath(getDevices(activeType, brandId, 1))
      dispath(changeActive({ typeId: activeType, brandId }))
    }
  }
