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
                <SlideImg src = { props.imgUrl } alt = { props.imgAlt } />
            </SlideImgLink>
        </StyledSlide>
    )
}

export default Slide