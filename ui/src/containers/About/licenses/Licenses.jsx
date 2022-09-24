import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const Licenses = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Лицензия</h2>
        </motion.section>
    )
}

export default Licenses
