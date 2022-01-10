import { createSlice } from "@reduxjs/toolkit"
import { typesHttp } from "../../http/typesHttp";





const initialState = {
  array: []
}

const typesReleases = createSlice({
  name: "typesReleases",
  initialState,
  reducers: {
    setTypes:(state, { payload }) => {
      state.array = state.array.concat(payload)
      },
  
  },
})

const { actions, reducer } = typesReleases

export const {setTypes} = actions

export default reducer



export const getTypes = (form, navigate) => async dispath => {
    const data = await typesHttp.getTypes()
    dispath(setTypes(data))
}
