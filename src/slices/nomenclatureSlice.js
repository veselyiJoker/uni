import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        atcClassification: {
            teamplate: ['name', 'manufacturer','country','inn','atc'],            
            data: [
                {
                    name: '',
                    manufacturer: '',
                    country: '',
                    inn: '',
                    atc: '',
                }
            ]
        },
        domesticManufacturersProducts: {
            teamplate: ['name', 'manufacturer','country','inn','atc'],            
            data: [
                {
                    name: '',
                    manufacturer: '',
                    country: '',
                    inn: '',
                    atc: '',
                }
            ]
        },
        medicines: {
            teamplate: ['name', 'manufacturer','country','inn','atc'],            
            data: [
                {
                    name: '',
                    manufacturer: '',
                    country: '',
                    inn: '',
                    atc: '',
                }
            ]
        },
        medicalProducts: {
            teamplate: ['name', 'manufacturer','country','inn','atc'],            
            data: [
                {
                    name: '',
                    manufacturer: '',
                    country: '',
                    inn: '',
                    atc: '',
                }
            ]
        },
        biologicallyActiveAdditives: {
            teamplate: ['name', 'manufacturer','country','inn','atc'],            
            data: [
                {
                    name: '',
                    manufacturer: '',
                    country: '',
                    inn: '',
                    atc: '',
                }
            ]
        },
        hygieneProducts: {
            teamplate: ['name', 'manufacturer','country','inn','atc'],            
            data: [
                {
                    name: '',
                    manufacturer: '',
                    country: '',
                    inn: '',
                    atc: '',
                }
            ]
        }
    }
}

const nomenclatureSlice = createSlice({
    name: 'nomenclature',
    initialState,
    reducers: {

    }
})

export const {  } = nomenclatureSlice.actions
export const nomenclatureReducer = nomenclatureSlice.reducer
