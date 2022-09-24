import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'

const Contacts = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Контакты</h2>
        </motion.section>
    )
}

export default Contacts