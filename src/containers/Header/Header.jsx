import React, { useState } from 'react'
import {
    NavLink
} from 'react-router-dom'
import { URL } from '../../constants/constants'
import { Localization } from '../../components/Localization/Localization'
import { HeaderAbout } from './HeaderAbout/HeaderAbout'
import { HeaderDistribution } from './HeaderDistribution/HeaderDistribution'
import { HeaderNomenclature } from './HeaderNomenclature/HeaderNomenclature'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import {
    StyledHeader,
    Container,
    NavContainer,
    Nav,
    NavList,
    NavItem,
} from './styles'

import { translate } from '../../i18n/messages/translate'

const Header = () => {
    const i18nGroup = 'header.'

    const [ openedMenuHref, setOpenedMenuHref ] = useState('')

    const openNavItemMenu = () => {

        switch (openedMenuHref) {      
            case `${ URL }/about`:
                return <HeaderAbout />

            case `${ URL }/distribution`:
                return <HeaderDistribution />

            case `${ URL }/nomenclature`:
                return <HeaderNomenclature />
            default:
                break
        }

    }

    const handlerNavItemMouseOver = ({ target: { href } }) => {
        setOpenedMenuHref(href)
    }

    const handlerHeaderPopupMouseLeave = () => {
        console.log('блять');
        setOpenedMenuHref('') 
    }

    return (
        <StyledHeader>
            <Container>
                <NavContainer onMouseLeave = { handlerHeaderPopupMouseLeave }>
                    <Nav>
                        <NavList>
                            <NavItem>              
                                <NavLink
                                    to = '/about'
                                    onMouseOver = { handlerNavItemMouseOver }
                                >
                                    { translate(`${ i18nGroup }about`) }
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to = '/distribution'
                                    onMouseOver = { handlerNavItemMouseOver }
                                >
                                    { translate(`${ i18nGroup }distribution`) }
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to = '/nomenclature'
                                    onMouseOver = { handlerNavItemMouseOver }
                                >
                                    { translate(`${ i18nGroup }nomenclature`) }
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to = '/'
                                    onMouseOver = { handlerNavItemMouseOver }
                                >
                                    { translate(`${ i18nGroup }unifarm`) }
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to = '/for-byers'
                                    onMouseOver = { handlerNavItemMouseOver }
                                >
                                    { translate(`${ i18nGroup }forBuyers`) }
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    to = '/for-suppliers'
                                    onMouseOver = { handlerNavItemMouseOver }
                                >
                                    { translate(`${ i18nGroup }forSuppliers`) }
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to = '/vacancies'>
                                    { translate(`${ i18nGroup }vacancies`) }
                                </NavLink>
                            </NavItem>
                        </NavList>
                    </Nav>
                    {
                        openNavItemMenu()
                    }
                </NavContainer>
                <Localization />
                <Breadcrumbs />
            </Container>
        </StyledHeader>
    )
}

export default Header
