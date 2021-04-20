import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (city = 'kaduna', { dispatch }) => {
    dispatch(loader())
    const option = {
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    }

    const { data } = await axios(option)
    
    const second_option = {
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${data && data.coord.lat}&lon=${data && data.coord.lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    }
    
    const res = await axios(second_option)
    const second_data = res.data
    dispatch(getData({data, second_data}))
  }

)


export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    defaultData: null,
    forcast: null,
    isLoading: false
  },
  reducers: {
    getData: (state, action) => {
      
      state.defaultData = action.payload.data
      state.forcast = action.payload.second_data
      state.isLoading = false
    },
    loader: (state) => {
      state.isLoading = true
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { getData, loader } = weatherSlice.actions

export default weatherSlice.reducer