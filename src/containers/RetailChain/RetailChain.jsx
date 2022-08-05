import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const RetailChain = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Розничная сеть</h2>
        </motion.section>
    )
}

export default RetailChain
