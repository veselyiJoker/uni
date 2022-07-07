import React from 'react'
import {
    Link
} from 'react-router-dom'

export const HeaderAbout = () => (
    <ul>
        <li>
            <Link to='/about'>
            Общая информация 
            </Link>
        </li>
        <li>
            <Link to='/about/structure'>
                Структура
            </Link>
        </li>
        <li>
            <Link to='/about/licenses'>
                Лицензии и сертификаты
            </Link>
        </li>
        <li>
            <Link to='/about/storage-system '>
                Система хранения
            </Link>
        </li>
        <li>
            <Link to='/about/history'>
                История
            </Link>
        </li>
        <li>
            <Link to='/about/vacancies'>
                Вакансии
            </Link>
        </li>
        <li>
            <Link to='/about/documents'>
                Документы
            </Link>
        </li>
        <li>
            <Link to='/about/events'>
                События
            </Link>
        </li>
    </ul>
)