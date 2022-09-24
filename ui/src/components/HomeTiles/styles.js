import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHomeTiles = styled.div`
    
`

export const HomeTilesList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const HomeTile = styled.li`
    width: 20%;
    height: 330px;
`

export const HomeTileLink = styled(Link)`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`