import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const Distribution = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Эксклюзивная дистрибуция</h2>
        </motion.section>
    )
}

export default Distribution
