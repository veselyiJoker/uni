import React from 'react'
import { translate } from '../../../i18n/messages/translate'
import { 
    StyledHeaderAbout, 
    FeaturedContainer,
    FeaturedLink,
    List,
    AboutLink,
    SubList
} from './styles'


export const HeaderAbout = () => {

    const i18nGroup = 'header.dropdownAbout.'

    return (
        <StyledHeaderAbout>
            <FeaturedContainer>
                <FeaturedLink to='/about'>
                    { translate(`${ i18nGroup }featured`) }
                </FeaturedLink>
                <p>
                    { translate(`${ i18nGroup }featuredSubtitle`) }
                </p>
            </FeaturedContainer>
            <List>
                <li>
                    <AboutLink to='/about/structure'>
                        { translate(`${ i18nGroup }structure`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/partner-companies'>
                        { translate(`${ i18nGroup }partnerCompanies`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/storage-system '>
                        { translate(`${ i18nGroup }storageSystem`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/securities-market'>
                        { translate(`${ i18nGroup }securitiesMarketInfo`) }
                    </AboutLink>
                </li>
            </List>
            <List>
                <li>
                    <AboutLink to='/about/licenses'>
                        { translate(`${ i18nGroup }licensesAndCertificates`) }
                    </AboutLink>
                </li>
                <li>
                    { translate(`${ i18nGroup }documents`) }
                    <SubList>
                        <li>
                            <AboutLink to='/about/documents?type=personal-info'>
                                { translate(`${ i18nGroup }personalData`) }
                            </AboutLink>
                        </li>
                        <li>
                            <AboutLink to='about/documents?type=regulations'>
                                { translate(`${ i18nGroup }regulations`) }
                            </AboutLink>
                        </li>
                        <li>
                            <AboutLink to='about/documents?type=work-documents'>
                                { translate(`${ i18nGroup }workDocuments`) }
                            </AboutLink>
                        </li>
                    </SubList>
                </li>
            </List>
            <List>
                <li>
                    <AboutLink to='/about/events'>
                        { translate(`${ i18nGroup }events`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/history'>
                        { translate(`${ i18nGroup }history`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/vacancies'>
                        { translate(`${ i18nGroup }vacancies`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/contacts'>
                        { translate(`${ i18nGroup }contacts`) }
                    </AboutLink>
                </li>
            </List>
        </StyledHeaderAbout>
    )
}