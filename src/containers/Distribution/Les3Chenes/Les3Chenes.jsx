import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const Les3Chenes = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Les 3 chenes</h2>
        </motion.section>
    )
}
export default Les3Chenes
