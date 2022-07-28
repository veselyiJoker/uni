import styled from 'styled-components'
import Slider from 'react-slick'

export const StyledHomeSlider = styled(Slider)`
    position: relative;
    width: 100%;
    overflow: hidden;

    .slick-track {
        display: flex;
    }
`

export const DotsList = styled.ul`
    display: flex;
    position: absolute;
    width: 100%;
    justify-content: center;
    bottom: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const Dot = styled.button`

`

export const PrevArrow = styled.button`
    position: absolute;
    width: 35px;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
`

export const NextArrow = styled.button`
    position: absolute;
    width: 35px;
    height: 100%;
    top: 0;
    right: 0;
    z-index: 2;
`