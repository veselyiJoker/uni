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


const Documents = () => {

    const dispatch = useDispatch()

    const data = useSelector( state => state.documents.data )
    const document = useSelector( state => state.documents.activeDocument )

    const handlerListItemButton = ({ currentTarget: { dataset: { link } } }) => {
        dispatch( changeActiveDocument( link ) )
    }

    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Документы</h2>
            <List component = 'nav'>
                {
                    Object.values(data).map(
                        elem => (
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
                                    </List>
                                </Collapse>
                            </Fragment>
                        )
                    )
                }
            </List>
            <PDFViewer link = { document } />
        </motion.section>
    )
}

export default Documents
