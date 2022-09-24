import React from 'react'
import HomeSlider from '../../components/HomeSlider/HomeSlider'
import HomeTiles from '../../components/HomeTiles/HomeTiles'
import { motion } from 'framer-motion/dist/framer-motion'
import { pagesTransition } from '../../constants/constants'
import PartnersInfiniteSlider from '../../components/PartnersInfiniteSlider/PartnersInfiniteSlider'

const Home = () => {

    return (
        <motion.section
            { ...pagesTransition  }
        >
            <HomeSlider />
            <HomeTiles />
            <PartnersInfiniteSlider />
        </motion.section>
    )
}

export default Home










/* <iframe loading="lazy" class="iframe-desktop" src="https://hi360v.com/v-tours/intexsoft_g/" frameborder="0" scrolling="no" width="100%" height="720 px" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true">

</iframe> */
