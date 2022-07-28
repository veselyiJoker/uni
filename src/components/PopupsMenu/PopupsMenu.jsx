import React from 'react'
import { StyledPopupsMenu } from './style'

const PopupsMenu = () => {

    const popupsBtnsAttributes = [
        'partners',
        '',
        '',
        '',
        ''
    ];

    return (
        <StyledPopupsMenu>
            <ul>
                <li>
                    <button>
                        popup 1
                    </button>
                </li>
                <li>
                    <button>
                        popup 2
                    </button>
                </li>
                <li>
                    <button>
                        popup 3
                    </button>
                </li>
                <li>
                    <button>
                        popup 4
                    </button>
                </li>
                <li>
                    <button>
                        popup 5
                    </button>
                </li>
            </ul>
        </StyledPopupsMenu>
    )
}

export default PopupsMenu