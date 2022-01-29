import { createSlice } from '@reduxjs/toolkit'
import { getDevices } from './devicesReducer'
import { UsersApi } from '../../http/usersApi'
import { getTypesBrands } from './typesBrandsReducer'

const initialState = {
  rows: [],
  count: 0
}

const userReleases = createSlice({
  name: 'userReleases',
  initialState,
  reducers: {
    getUsers: (state, { payload }) => {
      state.rows = payload.rows
      state.count = payload.count
    }
  },
})

const { actions, reducer } = userReleases

export const { getUsers } = actions

export default reducer

