import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    homeSlider: [
        {
            src: 'http://localhost:5000/images/homeSlider/slide-1.jpg',
            alt: ''
        },
        {
            src: 'http://localhost:5000/images/homeSlider/slide-2.jpg',
            alt: ''
        },
        {
            src: 'http://localhost:5000/images/homeSlider/slide-3.jpg',
            alt: ''
        },
        {
            src: 'http://localhost:5000/images/homeSlider/slide-4.jpg',
            alt: ''
        },
        {
            src: 'http://localhost:5000/images/homeSlider/slide-5.jpg',
            alt: ''
        },
        {
            src: 'http://localhost:5000/images/homeSlider/slide-6.jpg',
            alt: ''
        },
    ],
    partnersSlider: [
        {
            link: '/distribution/strategic-partners',
            src: 'http://localhost:5000/images/partnersSlider/jpeg/bayer.jpg',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: 'http://localhost:5000/images/partnersSlider/jpeg/academpharm.png',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: 'http://localhost:5000/images/partnersSlider/jpeg/belmedpreparaty.jpg',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: 'http://localhost:5000/images/partnersSlider/jpeg/bouchara_recordati.jpg',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: 'http://localhost:5000/images/partnersSlider/jpeg/bayer.jpg',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: 'http://localhost:5000/images/partnersSlider/jpeg/bayer.jpg',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
        },
        {
            link: '/distribution/strategic-partners',
            src: '#',
            alt: ''
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
