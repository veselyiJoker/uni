import React from 'react'
import { Link } from 'react-router-dom'
import { 
    NomenclatureList,
    NomenclatureSubList,
    NomenclatureListItem,
    CollapseContainer
} from './styles'


const NomenclatureMenu = () => {
    return (
        <header>
            <NomenclatureList>
                <NomenclatureListItem component='li'>
                    <Link to='/nomenclature/atc-classification'>
                        АТХ классификация
                    </Link>
                </NomenclatureListItem>
                <NomenclatureListItem component='li'>
                    <Link to='/nomenclature/domestic-manufacturers-products'>
                        Продукция отечественных производителей
                    </Link>
                </NomenclatureListItem>
                <NomenclatureListItem component='li'>
                    Номенклатура
                </NomenclatureListItem>
                <CollapseContainer
                    in = { true }
                    timeout = 'auto'
                    unmountOnExit
                >
                    <NomenclatureSubList>
                        <NomenclatureListItem component='li'>
                            <Link to='/nomenclature'>
                                Лекарственные средства
                            </Link>
                        </NomenclatureListItem>
                        <NomenclatureListItem component='li'>
                            <Link to='/nomenclature?type=medicalProducts'>
                                Изделия медицинского назначения
                            </Link>
                        </NomenclatureListItem>
                        <NomenclatureListItem component='li'>
                            <Link to='/nomenclature?type=biologicallyActiveAdditives'>
                                Биалогически активные добавки
                            </Link>
                        </NomenclatureListItem>
                        <NomenclatureListItem component='li'>
                            <Link to='/nomenclature?type=hygieneProducts'>
                                Изделия гигиенического назначения
                            </Link>
                        </NomenclatureListItem>
                    </NomenclatureSubList>
                </CollapseContainer>
            </NomenclatureList>
        </header>
    )
}

export default NomenclatureMenu
