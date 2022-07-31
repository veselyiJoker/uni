import { configureStore } from '@reduxjs/toolkit'
import { homeReducer } from './homeSlice'
import { mainReducer } from './mainSlice'

export const store = configureStore({
    reducer: {
        main: mainReducer,
        home: homeReducer
    },
})