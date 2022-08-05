import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const Documents = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Документы</h2>
        </motion.section>
    )
}

export default Documents
