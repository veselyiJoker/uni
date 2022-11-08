import React from 'react'
import { useSelector } from 'react-redux'
import Slide from './Slide/Slide'

import { 
    StyledHomeSlider,
    PrevArrow,
    NextArrow,
    DotsList,
    Dot,
} from './styles'

const HomeSlider = () => {

    const slidesData = useSelector(state => state.home.homeSlider)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow></PrevArrow>,    
        nextArrow: <NextArrow></NextArrow>,
        appendDots: dots => <DotsList>{ dots }</DotsList>,
        customPaging: i => <Dot></Dot>,
    }

    return (
        <StyledHomeSlider { ...settings }>
            {
                slidesData.map(
                    (e, i) => (
                        <Slide
                            key = { e.link + i }
                            src = { e.src }
                            alt = { e.alt }
                        />
                    )
                )
            }
        </StyledHomeSlider>
    )
}

export default HomeSlider