import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const StyledHeaderAbout = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    width: 100%;
    padding: 68px 80px 68px 78px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: #fff;
`

export const FeaturedContainer = styled.div`
    width: 250px;
`

export const FeaturedLink = styled(Link)`
    margin-bottom: 25px;
    text-decoration: none;
`

export const List = styled.ul`
    box-sizing: border-box;
    width: 310px;
    padding: 0 0 0 46px;
    margin: 0;
    list-style: none;
    li {
        margin-bottom: 18px;
    }
`

export const AboutLink = styled(Link)`
    text-decoration: none;
`