import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const Nomenclature = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Каталог продукции</h2>
        </motion.section>
    )
}

export default Nomenclature
