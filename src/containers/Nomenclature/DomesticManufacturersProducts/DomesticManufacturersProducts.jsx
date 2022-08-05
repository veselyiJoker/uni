import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const DomesticManufacturersProducts = () => {
    return (
        <motion.section 
            { ...pagesTransition }
        >
            <h2>Продукция отечественных производителей</h2>
        </motion.section>
    )
}

export default DomesticManufacturersProducts
