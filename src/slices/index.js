import { configureStore } from '@reduxjs/toolkit'
import { documentsReducer } from './documentsSlice'
import { homeReducer } from './homeSlice'
import { mainReducer } from './mainSlice'

export const store = configureStore({
    reducer: {
        main: mainReducer,
        home: homeReducer,
        documents: documentsReducer
    },
})