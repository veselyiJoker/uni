import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LOCALES } from '../../i18n'
import { changeLocalization } from '../../slices/mainSlice'
import {
    StyledLocalization,
    SelectLocalizationBtn,
    LocalizationSelector,
    ChangeLocalizationBtn
} from './styles'


export const Localization = props => {

    const dispatch = useDispatch()

    const SelectedLocalization = useSelector(state => state.main.localization)

    const getLocalizationFullName = (localization) => {
        switch (localization) {
            case LOCALES.RUSSIAN:
                return 'Rus'
            case LOCALES.ENGLISH:
                return 'Eng'
            default:
                return localization
        }
    }

    const handlerChangeLocalization = ({ target: { dataset: { localization } } }) => {
        dispatch(changeLocalization( localization ))
    }

    return (
        <StyledLocalization>
            <SelectLocalizationBtn>
                {
                    getLocalizationFullName(SelectedLocalization)
                }
            </SelectLocalizationBtn>
            <LocalizationSelector>
                <li>
                    <ChangeLocalizationBtn
                        data-localization = { LOCALES.RUSSIAN }
                        onClick = { handlerChangeLocalization }
                    >
                        ru
                    </ChangeLocalizationBtn>
                </li>
                <li>
                    <ChangeLocalizationBtn
                        data-localization = { LOCALES.ENGLISH }
                        onClick = { handlerChangeLocalization }
                    >
                        en
                    </ChangeLocalizationBtn>
                </li>
            </LocalizationSelector>
        </StyledLocalization>
    )
}
