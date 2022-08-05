import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const StorageSystem = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Система хранения</h2>
        </motion.section>
    )
}

export default StorageSystem
