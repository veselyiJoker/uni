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


const arr = [
    {
        name: 'Обработка персональных данных',
        documents: [
            {
                name: 'Персональные данные',
                link: 'sample.pdf',
                request: 'type=personal-info'
            }
        ]
    },
    {
        name: 'Нормативные документы',
        documents: [
            {
                name: 'Нормативные документы',
                link: 'test.pdf',
                request: 'type=regulations'
            }
        ]
    },
    {
        name: 'Рабочие документы',
        documents: [
            {
                name: 'Рабочие документы',
                link: 'testPDF.pdf',
                request: 'type=work-documents'
            }
        ]
    }
]

const Documents = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Документы</h2>
            <List component = 'nav'>
                {
                    arr.map(
                        elem => (
                            <Fragment key = { elem.name }>
                                <ListItemButton >
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
                                            elem.documents.map(
                                                elem => (
                                                    <ListItemButton key = { elem.link } sx = {{ pl: 4 }}>
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
            <PDFViewer />
        </motion.section>
    )
}

export default Documents
