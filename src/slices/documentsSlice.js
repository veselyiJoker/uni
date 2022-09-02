import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {
        personalData: {
            name: 'Обработка персональных данных',
            documents: {
                personalData: {
                    name: 'Персональные данные',
                    link: '/sample.pdf',
                    request: 'type=personal-info'
                }
            },
            includes: {
                workDocuments: {
                    name: 'Рабочие документы',
                    documents: {
                        workDocuments: {
                            name: 'Рабочие документы',
                            link: '/testPDF.pdf',
                            request: 'type=work-documents'
                        }
                    },
                    includes: {
                        regulations: {
                            name: 'Нормативные документы',
                            documents: {
                                regulations: {
                                    name: 'Нормативные документы',
                                    link: '/test.pdf',
                                    request: 'type=regulations'
                                }
                            },
                            includes: {}
                        },
                    }
                } 
            }
        },
        regulations: {
            name: 'Нормативные документы',
            documents: {
                regulations: {
                    name: 'Нормативные документы',
                    link: '/test.pdf',
                    request: 'type=regulations'
                }
            },
        },
        workDocuments: {
            name: 'Рабочие документы',
            documents: {
                workDocuments: {
                    name: 'Рабочие документы',
                    link: '/testPDF.pdf',
                    request: 'type=work-documents'
                }
            },
        }
    },
    loadedFilesLinks: {},
    activeDocument: ''
}

const documentsSlice = createSlice ({
    name: 'documents',
    initialState,
    reducers: {
        addLoadedFileLink (state, action) {
            state.loadedFilesLinks[action.payload] = action.payload
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
