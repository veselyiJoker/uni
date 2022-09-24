import React from 'react'
import { 
    StyledSlide,
    SlideImg,
} from './styles'


const Slide = props => {

    return (
        <StyledSlide>
            <SlideImg src = { props.url } alt = { props.alt } />
        </StyledSlide>
    )
}

export default Slide