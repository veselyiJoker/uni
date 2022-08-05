import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const About = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Общая информация</h2>
        </motion.section>
    )
}

export default About
