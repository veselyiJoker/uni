import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const CompanyStructure = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Структура компании</h2>
        </motion.section>
    )
}

export default CompanyStructure
