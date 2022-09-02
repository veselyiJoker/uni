import React, { Fragment } from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'
import {
    List,
    Collapse,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveDocument } from '../../../slices/documentsSlice'
import {
    DocumentsContainer,
    DocumentsList
} from './styles'


const Documents = () => {

    const dispatch = useDispatch()

    const data = useSelector( state => state.documents.data )
    const documentLink = useSelector( state => state.documents.activeDocument )

    const parseIncludes = includes => {
        return Object.values(includes).map(
            elem => {                 
                return (
                    <Fragment key = { elem.name }>
                        <ListItemButton>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary = { elem.name } />
                        </ListItemButton>
                        <Collapse
                            in = { true }
                            timeout = 'auto'
                            unmountOnExit
                        >
                            <List component = 'div' disablePadding>
                                {
                                    Object.values(elem.documents).map(
                                        elem => (
                                            <ListItemButton
                                                key = { elem.link }
                                                component='li'
                                                sx = {{ pl: 4 }}
                                                data-link = { elem.link }
                                                onClick = { handlerListItemButton } 
                                            >
                                                <ListItemIcon>
                                                </ListItemIcon>
                                                <ListItemText primary = { elem.name } />
                                            </ListItemButton>
                                        )
                                    )
                                }
                                {
                                   !!elem.includes
                                   && !!Object.keys(elem.includes).length
                                   && parseIncludes(elem.includes)
                                }
                            </List>
                        </Collapse>
                    </Fragment>
                )
            }
        )
    }

    const handlerListItemButton = ({ currentTarget: { dataset: { link } } }) => {
        dispatch( changeActiveDocument( link ) )
    }

    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Документы</h2>
            <DocumentsContainer>
                <DocumentsList component = 'div'>
                    {
                       parseIncludes(data)
                    }
                </DocumentsList>
                <PDFViewer link = { documentLink } />
            </DocumentsContainer>
        </motion.section>
    )
}

export default Documents
