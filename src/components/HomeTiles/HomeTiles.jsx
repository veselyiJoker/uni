import React from 'react'
import { 
    StyledHomeTiles,
    HomeTilesList,
    HomeTile,
    HomeTileLink
} from './styles'


const HomeTiles = () => {


    return (
        <StyledHomeTiles>
            <HomeTilesList>
                <HomeTile>
                    <HomeTileLink to='/about/partner-companies'>
                        Компании партнёры
                    </HomeTileLink>
                </HomeTile>
                <HomeTile>
                    <HomeTileLink to='/retail-chain'>
                        Розничная сеть
                    </HomeTileLink>
                </HomeTile>
                <HomeTile>
                    <HomeTileLink to='/distribution'>
                        Эксклюзивная дистрибуция
                    </HomeTileLink>
                </HomeTile>
                <HomeTile>
                    <HomeTileLink to='/about/events'>
                        События
                    </HomeTileLink>
                </HomeTile>
                <HomeTile>
                    <HomeTileLink to='/about/contacts'>
                        Контакты
                    </HomeTileLink>
                </HomeTile>
            </HomeTilesList>
        </StyledHomeTiles>
    )
}

export default HomeTiles