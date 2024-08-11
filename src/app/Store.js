import { configureStore } from '@reduxjs/toolkit'
import ludoReducer from '../features/ludo/ludoSlice'

export const store = configureStore({
  reducer: {
    ludoslice:ludoReducer,
  },
})