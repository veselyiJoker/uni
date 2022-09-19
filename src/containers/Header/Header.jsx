import React, { useEffect, useState } from 'react'
import { foundFirstDocumentInCatalog, URL } from '../../constants/constants'
import { Localization } from '../../components/Localization/Localization'
import { SubMenuAbout } from './SubMenuAbout/SubMenuAbout'  
import { SubMenuDistribution } from './SubMenuDistribution/SubMenuDistribution'
import { SubMenuNomenclature } from './SubMenuNomenclature/SubMenuNomenclature'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import {
    StyledHeader,
    Container,
    NavContainer,
    Nav,
    NavList,
    NavItem,
    NavItemLink,
} from './styles'

import { translate } from '../../i18n/messages/translate'
import { useSelector } from 'react-redux'


const Header = () => {
    const i18nGroup = 'header.'

    const documentsData = useSelector( state => state.documents.data )

    const [ openedMenuHref, setOpenedMenuHref ] = useState('')
    const [ documentsListData, setDocumentsListData ] = useState([])

    const handlerOpenSubMenu = ({ target: { href } }) => {
        setOpenedMenuHref( href )
    }

    const handlerHeaderMouseLeave = () => {
        setOpenedMenuHref('')
    }

    useEffect(
        () => {
            const documentsDataKeys = Object.keys( documentsData )
            const processedDocumentsListData = []
            
            for (let i = 0; i < documentsDataKeys.length; i++) {
                const firstDocumentInCatalog = foundFirstDocumentInCatalog( documentsData[documentsDataKeys[i]] )
                
                if ( firstDocumentInCatalog ) {
                    const documentsListDataItem = {
                        name: documentsData[documentsDataKeys[i]].name,
                        link: firstDocumentInCatalog.request
                    }
    
                    processedDocumentsListData.push( documentsListDataItem )
                }
            }

            setDocumentsListData( processedDocumentsListData )
        }
        ,[documentsData]
    )

    return (
        <StyledHeader>
            <Container>
                <NavContainer onMouseLeave = { handlerHeaderMouseLeave }>
                    <Nav>
                        <NavList>
                            <NavItem>
                                <NavItemLink
                                    to = '/about'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }about`) }
                                </NavItemLink>
                                {
                                    openedMenuHref === `${ URL }/about` && (
                                        <SubMenuAbout
                                            documentsListData = { documentsListData }
                                        />
                                    )
                                }
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    to = '/distribution'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }distribution`) }
                                </NavItemLink>
                                {
                                    openedMenuHref === `${ URL }/distribution` && (
                                        <SubMenuDistribution /> 
                                    )
                                }
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    to = '/nomenclature'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }nomenclature`) }
                                </NavItemLink>
                                {
                                    openedMenuHref === `${ URL }/nomenclature` && (
                                        <SubMenuNomenclature />
                                    )
                                }
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    to = '/'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }unifarm`) }
                                </NavItemLink>
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    to = '/retail-chain'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }retailChain`) }
                                </NavItemLink>
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    to = '/for-byers'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }forBuyers`) }
                                </NavItemLink>
                            </NavItem>
                            <NavItem>
                                <NavItemLink
                                    to = '/for-suppliers'
                                    onMouseOver = { handlerOpenSubMenu }
                                    onFocus = { handlerOpenSubMenu }
                                >
                                    { translate(`${ i18nGroup }forSuppliers`) }
                                </NavItemLink>
                            </NavItem>
                        </NavList>
                    </Nav>
                </NavContainer>
                <Localization />
                <Breadcrumbs />
            </Container>
        </StyledHeader>
    )
}

export default Header
