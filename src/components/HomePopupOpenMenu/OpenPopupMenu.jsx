import React from 'react'
import { homePopupAttributes } from '../../constants/constants'
import PopupBtnContacts from './PopupBtnContacts/PopupBtnContacts'
import PopupBtnEvents from './PopupBtnEvents/PopupBtnEvents'
import PopupBtnExclusiveDistribution from './PopupBtnExclusiveDistribution/PopupBtnExclusiveDistribution'
import PopupBtnPartnerСompanies from './PopupBtnPartnerСompanies/PopupBtnPartnerСompanies'
import PopupBtnRetailNetwork from './PopupBtnRetailNetwork/PopupBtnRetailNetwork'
import { 
    StyledOpenPopupMenu,
    List,
    Item
 } from './styles'

const OpenPopupMenu = () => {

    return (
        <StyledOpenPopupMenu>
            <List>
                <Item>
                    <PopupBtnPartnerСompanies data-popup = { homePopupAttributes.partnerСompanies } />
                </Item>
                <Item>
                    <PopupBtnRetailNetwork data-popup = { homePopupAttributes.retailNetwork } />
                </Item>
                <Item>
                    <PopupBtnExclusiveDistribution data-popup = { homePopupAttributes.exclusiveDistribution } />
                </Item>
                <Item>
                    <PopupBtnContacts data-popup = { homePopupAttributes.contacts } />
                </Item>
                <Item>
                    <PopupBtnEvents data-popup = { homePopupAttributes.strategicPartners } />
                </Item>
            </List>
        </StyledOpenPopupMenu>
    )
}

export default OpenPopupMenu