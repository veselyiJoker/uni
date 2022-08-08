import React from 'react'
import { useSelector } from 'react-redux'
import Slide from './Slide/Slide'
import { StyledPartnersInfiniteSlider } from './styles'

const PartnersInfiniteSlider = () => {

    const partners = useSelector(state => state.home.partners)

    const settings = {
        accessibility: false,
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 29,
        autoplay: true,
        speed: 60000,
        autoplaySpeed: 0,
        arrows: false,
        cssEase: 'linear'        
    }

    return (
        <StyledPartnersInfiniteSlider { ...settings }>
            {
                partners.map(
                    (e, i) => (
                        <Slide
                            key = { e.link + i }
                            link = { e.link }
                            imgUrl= { e.imgUrl }
                            ImgAlt = { e.imgAlt }
                        />
                    )
                )
            }
        </StyledPartnersInfiniteSlider>
    )
}

export default PartnersInfiniteSlider
