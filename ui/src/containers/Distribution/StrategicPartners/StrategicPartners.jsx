import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const StrategicPartners = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Стратегические партнёры</h2>
        </motion.section>
    )
}

export default StrategicPartners