import styled from 'styled-components'
import {
    NavLink
} from 'react-router-dom'

export const StyledHeader = styled.header`

`

export const Container = styled.div`
    max-width: 1088px;
    width: 100%;
    margin: auto;
`

export const NavContainer = styled.div`
    position: relative;
`

export const Nav = styled.nav`

`

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
`

export const NavItem = styled.li`
    min-width: 150px;
    height: 68px;
`

export const NavItemLink = styled(NavLink)`
    display: block;
    text-decoration: none;
    line-height: 68px;
    text-align: center;
`

export const Breadcrumbs = styled.nav`

`

export const BreadcrumbsList = styled.ul`
    display: flex;
    list-style: none;
`

export const BreadcrumbsItem = styled.li`

`
