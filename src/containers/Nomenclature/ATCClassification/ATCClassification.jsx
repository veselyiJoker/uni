import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const ATCClassification = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>АТХ классификация</h2>
        </motion.section>
    )
}

export default ATCClassification
