import { createSlice } from '@reduxjs/toolkit'
import { LOCALES } from '../i18n'

const initialState = {
    localization: LOCALES.RUSSIAN,
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeLocalization(state, action) {
            state.localization = action.payload
        }
    }
})

export const { changeLocalization } = mainSlice.actions
export const mainReducer = mainSlice.reducer
