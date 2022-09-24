import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const ATCClassification = () => {
    return (
        <motion.div
            { ...pagesTransition }
        >
            <h2>АТХ классификация</h2>
        </motion.div>
    )
}

export default ATCClassification
