import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const EpicFavre = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Epic favre</h2>
        </motion.section>
    )
}

export default EpicFavre
