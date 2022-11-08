import React from 'react'
import { 
    StyledSlide,
    SlideImg,
    SlideImgLink,
} from './styles'


const Slide = props => {

    return (
        <StyledSlide>
            <SlideImgLink to = { props.link }>
                <SlideImg src = { props.src } alt = { props.alt } />
            </SlideImgLink>
        </StyledSlide>
    )
}

export default Slide