import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeaderNomenclature = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: flex;
    width: 100%;
    padding: 68px 80px 68px 78px;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    background: #fff;
    z-index: 13;
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

export const NomenclatureLink = styled(Link)`
    text-decoration: none;
`