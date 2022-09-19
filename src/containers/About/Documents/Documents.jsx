import React, { Fragment, useEffect } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { foundFirstDocumentInCatalog, pagesTransition } from '../../../constants/constants'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import {
    List,
    Collapse,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeDocument } from '../../../slices/documentsSlice'
import {
    DocumentsContainer,
    DocumentsList,
    DocumentSelectButton,
    DocumentSelectButtonText,
    DocumentSelectButtonLink
} from './styles'
import { useLocation } from 'react-router'


const Documents = () => {

    const location = useLocation()
    const dispatch = useDispatch()

    const documentsData = useSelector( state => state.documents.data )
    const documentLink = useSelector( state => state.documents.activeDocumentLink )
    
    const parseIncludes = includes => {
        const parsedIncludes = []

        for (let i = 0; i < Object.values( includes ).length; i++) {
            const catalog = Object.values( includes )[i]
    
            if ( catalog ) {
                const someoneDocument = foundFirstDocumentInCatalog( catalog )

                if ( someoneDocument ) {
                    parsedIncludes.push(
                        <Fragment key = { catalog.name + i }>
                            <DocumentSelectButton component = 'li'>
                                <DocumentSelectButtonText>
                                    {
                                        catalog.name
                                    }
                                </DocumentSelectButtonText>
                            </DocumentSelectButton>
                            <Collapse
                                component = 'li'
                                sx = {{ pl: 4 }}
                                in = { true }
                                timeout = 'auto'
                                unmountOnExit
                            >
                                <List component = 'ul' disablePadding>
                                    {
                                        Object.values( catalog.documents ).map(
                                            elem => (
                                                <DocumentSelectButton
                                                    key = { elem.request }
                                                    component = 'li'
                                                >
                                                    <DocumentSelectButtonLink to = { location.pathname + `?${ elem.request }` }>
                                                        {
                                                            elem.name
                                                        }
                                                    </DocumentSelectButtonLink>
                                                </DocumentSelectButton>
                                            )
                                        )
                                    }
                                    {
                                        !!catalog.includes
                                        && !!Object.keys( catalog.includes ).length
                                        && parseIncludes( catalog.includes )
                                    }
                                </List>
                            </Collapse>
                        </Fragment>
                    )
                }
            }
        }

        return (
            <Fragment>
                {
                    parsedIncludes.map(
                        elem => elem
                    )
                }
            </Fragment>
        )
    }

    useEffect(
        () => {
            if ( location.pathname === '/about/documents' ) {
                dispatch( changeDocument( location.search ) )
            }
        }
        ,[ location.search ]
    )

    return (
        <motion.section
            { ...pagesTransition }
        >
            <h2>Документы</h2>
            <DocumentsContainer>
                <DocumentsList component = 'ul'>
                    {
                       parseIncludes( documentsData )
                    }
                </DocumentsList>
                <PDFViewer link = { documentLink } />
            </DocumentsContainer>
        </motion.section>
    )
}

export default Documents
