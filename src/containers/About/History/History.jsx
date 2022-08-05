import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const History = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>История</h2>
        </motion.section>
    )
}

export default History
