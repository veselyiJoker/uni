import React from 'react'
import { translate } from '../../../i18n/messages/translate'
import { 
    StyledHeaderAbout, 
    FeaturedContainer,
    FeaturedLink,
    List,
    AboutLink
} from './styles'


export const HeaderAbout = () => {

    const i18nGroup = 'headerAbout.'

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
                    <AboutLink to='/about/licenses'>
                        { translate(`${ i18nGroup }licensesAndCertificates`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/storage-system '>
                        { translate(`${ i18nGroup }storageSystem`) }
                    </AboutLink>
                </li>
            </List>
            <List>
                <li>
                    <AboutLink to='/about/history'>
                        { translate(`${ i18nGroup }history`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/documents'>
                        { translate(`${ i18nGroup }documents`) }
                    </AboutLink>
                </li>
                <li>
                    <AboutLink to='/about/events'>
                        { translate(`${ i18nGroup }events`) }
                    </AboutLink>
                </li>
            </List>
        </StyledHeaderAbout>
    )
}