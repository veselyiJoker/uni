import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'

const AboutUs = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2>Общая информация</h2>
        </motion.section>
    )
}

export default AboutUs
