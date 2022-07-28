import React from 'react'
import { homePopupAttributes } from '../../constants/constants'
import PopupBtnContacts from './PopupBtnContacts/PopupBtnContacts'
import PopupBtnExclusiveDistribution from './PopupBtnExclusiveDistribution/PopupBtnExclusiveDistribution'
import PopupBtnPartnerСompanies from './PopupBtnPartnerСompanies/PopupBtnPartnerСompanies'
import PopupBtnRetailNetwork from './PopupBtnRetailNetwork/PopupBtnRetailNetwork'
import PopupBtnStrategicPartners from './PopupBtnStrategicPartners/PopupBtnStrategicPartners'
import { 
    StyledPopupsMenu,
    List,
    Item
 } from './styles'

const PopupsMenu = () => {

    return (
        <StyledPopupsMenu>
            <List>
                <Item>
                    <PopupBtnPartnerСompanies />
                </Item>
                <Item>
                    <PopupBtnExclusiveDistribution />
                </Item>
                <Item>
                    <PopupBtnContacts />
                </Item>
                <Item>
                    <PopupBtnStrategicPartners />
                </Item>
            </List>
        </StyledPopupsMenu>
    )
}

export default PopupsMenu