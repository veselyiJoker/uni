import React from 'react'
import { translate } from '../../../i18n/messages/translate'
import {
    StyledSubMenuDistribution,
    FeaturedContainer,
    FeaturedLink,
    List,
    SubList,
    DistributionLink
} from './styles'


export const SubMenuDistribution = () => {

    const i18nGroup = 'header.subMenuDistribution.'
    const i18nEpicFavre = 'epicFavre.'
    const i18nLes3Chenes = 'les3Chenes.'

    return (
        <StyledSubMenuDistribution>
            <FeaturedContainer>
                <FeaturedLink to='/distribution'>
                    { translate(`${ i18nGroup }featured`) }
                </FeaturedLink>
                <p>
                    { translate(`${ i18nGroup }featuredSubtitle`) }
                </p>
            </FeaturedContainer>
            <List>
                <li>
                    <DistributionLink to='/distribution/strategic-partners'>
                        { translate(`${ i18nGroup }strategicPartners`) }
                    </DistributionLink>
                </li>
                <li>
                    Epic favre
                    <SubList>
                        <li>
                            <DistributionLink to='distribution/epic-favre'>
                                { translate(`${ i18nGroup + i18nEpicFavre }biologicallyActiveAdditives`) }
                            </DistributionLink>
                        </li>
                        <li>
                            <DistributionLink to='distribution/epic-favre?type=cosmetics'>
                                { translate(`${ i18nGroup + i18nEpicFavre }cosmetics`) }
                            </DistributionLink>
                        </li>
                        <li>
                            <DistributionLink to='/distribution/epic-favre?type=sports-nutrion'>
                                { translate(`${ i18nGroup + i18nEpicFavre }sportsNutrition`) }
                            </DistributionLink>
                        </li>
                    </SubList>
                </li>
            </List>
            <List>
                <li>
                    Les 3 chenes
                    <SubList>
                        <li>
                            <DistributionLink to='/distribution/les-3-chenes'>
                                { translate(`${ i18nGroup + i18nLes3Chenes }biologicallyActiveAdditives`) }
                            </DistributionLink>
                        </li>
                        <li>
                            <DistributionLink to='/distribution/les-3-chenes?type=cosmetics'>
                                { translate(`${ i18nGroup + i18nLes3Chenes }cosmetics`) }
                            </DistributionLink>
                        </li>
                    </SubList>
                </li>
            </List>
        </StyledSubMenuDistribution>
    )
}
