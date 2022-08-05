import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const Events = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>События</h2>
        </motion.section>
    )
}


export default Events
