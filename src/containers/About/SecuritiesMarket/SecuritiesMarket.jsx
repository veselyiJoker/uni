import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const SecuritiesMarket = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Информация о ЗАО "УНИФАРМ" на рынке ценных бумаг</h2>
        </motion.section>
    )
}

export default SecuritiesMarket
