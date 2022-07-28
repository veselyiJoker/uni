import React from 'react'
import { 
    StyledSlide,
    SlideImg,
} from './styles'


export const Slide = props => {

    return (
        <StyledSlide>
            <SlideImg src = { props.url } alt = { props.alt } />
        </StyledSlide>
    )
}