import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'
import PDFViewer from '../../../components/PDFViewer/PDFViewer'

const Documents = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Документы</h2>
            <PDFViewer />
        </motion.section>
    )
}

export default Documents
