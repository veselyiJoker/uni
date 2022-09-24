import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const ForSuppliers = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Поставщикам</h2>
        </motion.section>
    )
}


export default ForSuppliers
