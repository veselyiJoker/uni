import React from 'react'
import {
    Link
} from 'react-router-dom'

export const HeaderDistribution = () => (
    <ul>
        <li>
            <Link to='/distribution'>
                Эксклюзивная дистрибуция
            </Link>
        </li>
        <li>
            Epic favre
            <ul>
                <li>
                    <Link to='distribution/epic-favre'>
                        Косметика
                    </Link>
                </li>
                <li>
                    <Link to='/distribution/epic-favre/dietary-supplements'>
                        БАД
                    </Link>
                </li>
                <li>
                    <Link to='/distribution/epic-favre/sports-nutrion'>
                        Спортивное питание
                    </Link>
                </li>
            </ul>
        </li>
        <li>
            Les 3 chenes
            <ul>
                <li>
                    <Link to='/distribution/les-3-chenes'>
                        Косметика
                    </Link>
                </li>
                <li>
                    <Link to='/distribution/les-3-chenes/dietary-supplements'>
                        БАД
                    </Link>
                </li>
            </ul>
        </li>
        <li>
            <Link to='/distribution/strategic-partners'>
                Стратегические партнеры
            </Link>
        </li>
    </ul>
)
