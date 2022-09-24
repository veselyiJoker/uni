import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const Vacancies = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Вакансии</h2>
        </motion.section>
    )
}

export default Vacancies
