import styled from 'styled-components'

export const StyledSlide = styled.div`
    height: calc(60vh - 68px);
    min-height: 300px;
    background: #d0d0d0;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.03);
    }
`

export const SlideImg = styled.img`
    object-fit: none;
    width: 100%;
    height: 100%;
`