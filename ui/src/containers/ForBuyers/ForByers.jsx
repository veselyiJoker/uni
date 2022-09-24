import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const ForByers = () => {
    return (
        <motion.section
            { ...pagesTransition }
        >
            <h2>Покупателям</h2>
        </motion.section>
    )
}

export default ForByers
