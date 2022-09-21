import React from 'react'
import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import { translate } from '../../i18n/messages/translate'
import { StyledBreadcrumbs } from './styles'


export const Breadcrumbs = () => {

    const i18nGroup = 'header.breadcrumbs.'
    const breadcrumbs = useBreadcrumbs()

    return (
        <StyledBreadcrumbs>
            {
                breadcrumbs.map(
                    ({
                        match,
                        breadcrumb
                    }) => {
                        return <span key = { match.pathname }>
                            {
                                match.pathname === '/'
                                ?
                                    ''
                                :
                                    ' / '
                            }
                            <Link to = { match.pathname }>
                                {
                                    translate( (i18nGroup + breadcrumb.props.children).toLowerCase() )
                                }
                            </Link>
                        </span>
                    }
                )
            }
        </StyledBreadcrumbs>
    )
}