import React from 'react'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../../constants/constants'

const DomesticManufacturersProducts = () => {
    return (
        <motion.div
            { ...pagesTransition }
        >
            <h2>Продукция отечественных производителей</h2>
        </motion.div>
    )
}

export default DomesticManufacturersProducts
