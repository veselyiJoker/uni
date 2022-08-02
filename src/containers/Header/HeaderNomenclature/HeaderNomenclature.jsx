import React from 'react'
import { translate } from '../../../i18n/messages/translate'
import {
    StyledHeaderNomenclature,
    FeaturedContainer,
    FeaturedLink,
    List,
    NomenclatureLink,
    SubList
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
                    Каталог продукции
                    <SubList>
                        <li>
                            <NomenclatureLink to='#'>
                                Лекарственные средства
                            </NomenclatureLink>
                        </li>
                        <li>
                            <NomenclatureLink to='#'>
                                Изделия медицинского назначения
                            </NomenclatureLink>
                        </li>
                        <li>
                            <NomenclatureLink to='#'>
                                Биологически активные добавки
                            </NomenclatureLink>
                        </li>
                        <li>
                            <NomenclatureLink to='#'>
                                Изделия гигиенического назначения
                            </NomenclatureLink>
                        </li>
                    </SubList>
                </li>
            </List>
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
