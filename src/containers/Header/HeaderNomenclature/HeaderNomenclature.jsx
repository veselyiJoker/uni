import React from 'react'
import { translate } from '../../../i18n/messages/translate'
import {
    StyledHeaderNomenclature,
    FeaturedContainer,
    FeaturedLink,
    List,
    NomenclatureLink
} from './styles'


export const HeaderNomenclature = () => {

    const i18nGroup = 'header.dropdownNomenclature.'

    return (
        <StyledHeaderNomenclature>
            <FeaturedContainer>
                <FeaturedLink to='/nomenclature'>
                    { translate(`${ i18nGroup }featured`) }
                </FeaturedLink>
                <p>
                    { translate(`${ i18nGroup }featuredSubtitle`) }
                </p>
            </FeaturedContainer>
            <List>
                <li>
                    <NomenclatureLink to='/nomenclature/atc-classification'>
                        { translate(`${ i18nGroup }ATCClassification`) }
                    </NomenclatureLink>
                </li>
                <li>
                    <NomenclatureLink to='/nomenclature/domestic-manufacturers-products'>
                        { translate(`${ i18nGroup }domesticManufacturersProducts`) }                        
                    </NomenclatureLink>
                </li>
            </List>
        </StyledHeaderNomenclature>
    )
}
