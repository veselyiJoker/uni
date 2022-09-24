import { createSlice } from '@reduxjs/toolkit'
import { parseForBeginningDocument } from '../constants/constants'


const initialState = {
// При смене языка будет отправлен новый объект data с английскими файлами и name
    data: {
        'personal-info': {
            name: 'Обработка персональных данных',
            documents: {
                'sample.pdf': {
                    name: 'Персональные данные',
                    request: 'type=personal-info/sample.pdf'
                },
            },
            includes: {
                'work-documents': {
                    name: 'Рабочие документы1',
                    documents: {
                        workDocuments: {
                            name: 'Рабочие документы1',
                            request: 'type=personal-info/work-documents/testPDF.pdf'
                        }
                    },
                    includes: {
                        regulations: {
                            name: 'Нормативные документы2',
                            documents: {
                                regulations: {
                                    name: 'Нормативные документы2',
                                    request: 'type=personal-info/work-documents/regulations/test.pdf'
                                }
                            },
                            includes: {}
                        },
                    }
                },
            }
        },
        'regulations': {
            name: 'Нормативные документы',
            documents: {
                regulations: {
                    name: 'Нормативные документы',
                    request: 'type=regulations/test.pdf'
                }
            },
            includes: {}
        },
        'work-documents': {
            name: 'Рабочие документы',
            documents: {
                workDocuments: {
                    name: 'Рабочие документы',
                    request: 'type=work-documents/testPDF.pdf'
                }
            },
            includes: {}
        }
    },
    loadedFilesLinks: {},
    activeDocumentLink: ''
}

const documentsSlice = createSlice ({
    name: 'documents',
    initialState,
    reducers: {
        changeDocument (state, action) {
            let urlParams = new URLSearchParams(action.payload)
            let urlParamsType = urlParams.get('type')

            //const urlLinkPath = urlParamsType.match('(.*)\/')[1].split('/')   
            const urlLink = urlParamsType.match('[^/]*.pdf+?$') && urlParamsType.match('[^/]*.pdf+?$')[0]
            
            if ( !urlLink ) {
                const beginningDocument = parseForBeginningDocument( state.data )

                if ( beginningDocument ) {
                    urlParams = new URLSearchParams( beginningDocument.request )
                    urlParamsType = urlParams.get('type')
    
                    state.activeDocumentLink = `/assets/${ parseForBeginningDocument( state.data ).request }` 
                }
            }

            state.activeDocumentLink = `/assets/${ urlParamsType }`
        }
    }
})

export const {
    addLoadedDocumentLink,
    changeDocument
} = documentsSlice.actions

export const documentsReducer = documentsSlice.reducer
