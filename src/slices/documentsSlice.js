import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loadedDocumentsLinks: [],
    activeDocument: ''
}

const documentsSlice = createSlice ({
    name: 'documents',
    initialState,
    reducers: {
        addLoadedDocumentLink (state, action) {
            state.loadedDocumentsLinks.push(action.payload)
        },
        changeActiveDocument (state, action) {
            state.activeDocument = action.payload
        }
    }
})

export const {
    addLoadedDocumentLink,
    changeActiveDocument
} = documentsSlice.actions

export const documentsReducer = documentsSlice.reducer
