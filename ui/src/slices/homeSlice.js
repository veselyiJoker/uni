import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    partners: [
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        },
        {
            link: '/distribution/strategic-partners',
            imgUrl: '#',
            imgAlt: ''
        }        
    ]
}

const homeSlice = createSlice ({
    name: 'home',
    initialState,
    reducers: {
        changeOpenedPopupType (state, action) {
            state.openedPopup = action.payload
        }
    }
})

export const { changeOpenedPopupType } = homeSlice.actions
export const homeReducer = homeSlice.reducer
