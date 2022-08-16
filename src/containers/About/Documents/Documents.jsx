import React from 'react'
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


const documentsList = () => {

    const obj = {
        personalData: {
            name: 'Обработка персональных данных',

        }
    }


}

const Documents = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Документы</h2>
            <List>
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary = 'Обработка персональных данных' />
                </ListItemButton>
                <Collapse
                    in = { true }
                    timeout = 'auto'
                    unmountOnExit
                >
                    <List component = 'div' disablePadding>
                        <ListItemButton sx = {{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary = '1' />
                        </ListItemButton>
                        <ListItemButton sx = {{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary = '2' />
                        </ListItemButton>
                        <ListItemButton sx = {{ pl: 4 }}>
                            <ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary = '3' />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary = 'Нормативные документы' />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary = 'Рабочие документы' />
                </ListItemButton>
            </List>
            <PDFViewer />
        </motion.section>
    )
}

export default Documents
