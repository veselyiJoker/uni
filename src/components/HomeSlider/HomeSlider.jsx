import React from 'react'
import Slide from './Slide/Slide'
import { 
    StyledHomeSlider,
    PrevArrow,
    NextArrow,
    DotsList,
    Dot,
} from './styles'


const HomeSlider = () => {

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
            <Slide url = '#' alt = '' />
            <Slide url = '#' alt = '' />
            <Slide url = '#' alt = '' />
            <Slide url = '#' alt = '' />
            <Slide url = '#' alt = '' />
            <Slide url = '#' alt = '' />
        </StyledHomeSlider>
    )
}

export default HomeSlider