import React from 'react'
import { useSelector } from 'react-redux'
import Slide from './Slide/Slide'
import { StyledPartnersSlider } from './styles'

const PartnersSlider = () => {

    const slidesData = useSelector(state => state.home.partnersSlider)

    const settings = {
        accessibility: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 29,
        autoplay: true,
        speed: 29 * 5000,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear'        
    }

    return (
        <StyledPartnersSlider { ...settings }>
            {
                slidesData.map(
                    (e, i) => (
                        <Slide
                            key = { e.link + i }
                            link = { e.link }
                            src= { e.src }
                            alt = { e.alt }
                        />
                    )
                )
            }
        </StyledPartnersSlider>
    )
}

export default PartnersSlider
