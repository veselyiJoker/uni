import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openedPopupType: ''
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        changeOpenedPopupType(state, action) {
            console.log(action.payload);
            state.openedPopup = action.payload
        }
    }
})

export const { changeOpenedPopupType } = homeSlice.actions
export const homeReducer = homeSlice.reducer
