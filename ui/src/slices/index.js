import { configureStore } from '@reduxjs/toolkit'
import { documentsReducer } from './documentsSlice'
import { homeReducer } from './homeSlice'
import { mainReducer } from './mainSlice'
import { nomenclatureReducer } from './nomenclatureSlice'

export const store = configureStore({
    reducer: {
        main: mainReducer,
        home: homeReducer,
        documents: documentsReducer,
        nomenclature: nomenclatureReducer,
    },
})