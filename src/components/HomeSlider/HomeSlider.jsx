import React from 'react'
import { Slide } from './Slide/Slide'
import { 
    StyledHomeSlider,
} from './styles'


export const HomeSlider = () => {

    const i18nGroup = ''

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <StyledHomeSlider { ...settings }>
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
            <Slide />
        </StyledHomeSlider>
    )
}