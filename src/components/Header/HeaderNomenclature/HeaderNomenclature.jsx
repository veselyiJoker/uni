import React from 'react'
import {
    Link
} from 'react-router-dom'

export const HeaderNomenclature = () => (
    <ul>
        <li>
            <Link to='/nomenclature'>
                Каталог продукции
            </Link>
        </li>
        <li>
            <Link to='/nomenclature/atc-classification'>
                АТХ классификация
            </Link>
        </li>
        <li>
            <Link to='/nomenclature/domestic-manufacturers-products'>
                Продукция отечественных производителей 
            </Link>
        </li>
    </ul>
)
