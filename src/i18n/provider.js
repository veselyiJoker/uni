import { flatten } from 'flat'
import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'

import { LOCALES } from './locales'
import messages from './messages'

const Provider = ({ children, locale = LOCALES.RUSSIAN}) => (
    <IntlProvider
        locale = { locale }
        textComponent = { Fragment }
        messages = { flatten(messages[locale]) }
    >
        {
            children
        }
    </IntlProvider>
)

export default Provider