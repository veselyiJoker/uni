import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const PartnerCompanies = () => {
    return (
        <motion.section
            { ...pagesTransition }
        >
            <h2>Компании партнёры</h2>
        </motion.section>
    )
}

export default PartnerCompanies
