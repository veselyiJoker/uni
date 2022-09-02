import React from 'react'
import { 
    Outlet
} from 'react-router-dom'
import NomenclatureMenu from '../../containers/Nomenclature/NomenclatureMenu/NomenclatureMenu'
import { Container, StyledNomenclatureLayout } from './styles'

export const NomenclatureLayout = () => (
    <StyledNomenclatureLayout>
        <NomenclatureMenu />
        <Container>
            <Outlet />
        </Container>
    </StyledNomenclatureLayout>
)