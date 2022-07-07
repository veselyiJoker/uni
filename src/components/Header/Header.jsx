import React from 'react'
import {
    NavLink
} from 'react-router-dom'
import { HeaderAbout } from './HeaderAbout/HeaderAbout'
import { HeaderDistribution } from './HeaderDistribution/HeaderDistribution'
import { HeaderNomenclature } from './HeaderNomenclature/HeaderNomenclature'
import {
    StyledHeader,
    Nav,
    NavList,
    NavItem,
    Breadcrumbs,
    BreadcrumbsNav,
    BreadcrumbsList,
    BreadcrumbsItem,
    HeaderPopup,
    Container
} from './styles'

const Header = props => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <NavList>
                        <NavItem>              
                            <NavLink to='/about'>
                                О компании
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/distribution'>
                                Дистрибуция
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/'>
                                Унифарм
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/nomenclature'>
                                Номенклатура
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/for-byers'>
                                Покупателям
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/for-suppliers'>
                                Поставщикам
                            </NavLink>
                        </NavItem>
                    </NavList>
                </Nav>
                <Breadcrumbs>
                    <BreadcrumbsNav>
                        <BreadcrumbsList>
                            <BreadcrumbsItem>Главная</BreadcrumbsItem>
                            <BreadcrumbsItem>Общая информация</BreadcrumbsItem>
                        </BreadcrumbsList>
                    </BreadcrumbsNav>
                </Breadcrumbs>
                <HeaderPopup>
                    <HeaderAbout />
                    <HeaderDistribution />
                    <HeaderNomenclature />
                </HeaderPopup>
            </Container>
        </StyledHeader>
    )
}

export default Header
