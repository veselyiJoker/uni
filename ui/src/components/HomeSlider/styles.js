import styled from 'styled-components'
import Slider from 'react-slick'

const sliderArrowWidth = 36
const sliderArrowHeight = 76
const sliderArrowBkg = '#fff'

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
    display: block;
    width: 10px;
    height: 10px;
    padding: 0;
    margin: 0 6px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`

export const PrevArrow = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    border: none;
    background: transparent;
    z-index: 2;
    cursor: pointer;

    &:active {
        &::after{
            transform: scale(0.95) translateX(calc(50px * -0.05));
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: calc( 50% - ${ sliderArrowHeight / 2 }px );
        left: 0;
        width: ${ sliderArrowWidth }px;
        height: ${ sliderArrowHeight }px;
        border-radius: 0 100% 100% 0 / 0 50% 50% 0;
        background: ${ sliderArrowBkg };
        transition: linear 0.1s;
    }
`

export const NextArrow = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 100%;
    border: none;
    background: transparent;
    z-index: 2;
    cursor: pointer;
    
    &:active {
        &::after{
            transform: scale(0.95) translateX(calc(50px * 0.05));
        }
    }

    &::after {
        content: '';
        position: absolute;
        top: calc( 50% - ${ sliderArrowHeight / 2 }px );
        right: 0;
        width: ${ sliderArrowWidth }px;
        height: ${ sliderArrowHeight }px;
        border-radius: 100% 0 0 100% / 50% 0 0 50%;
        background: ${ sliderArrowBkg };
        transition: linear 0.1s;
    }
`