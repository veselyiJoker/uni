import React from 'react'
import Slide from './Slide/Slide'
import slide_1 from '../../assets/images/home_slider/slide_1.jpg'
import slide_2 from '../../assets/images/home_slider/slide_2.jpg'
import slide_3 from '../../assets/images/home_slider/slide_3.jpg'
import slide_4 from '../../assets/images/home_slider/slide_4.jpg'
import slide_5 from '../../assets/images/home_slider/slide_5.jpg'
import slide_6 from '../../assets/images/home_slider/slide_6.jpg'
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
            <Slide url = { slide_1 } alt = '' />
            <Slide url = { slide_2 } alt = '' />
            <Slide url = { slide_3 } alt = '' />
            <Slide url = { slide_4 } alt = '' />
            <Slide url = { slide_5 } alt = '' />
            <Slide url = { slide_6 } alt = '' />
        </StyledHomeSlider>
    )
}

export default HomeSlider