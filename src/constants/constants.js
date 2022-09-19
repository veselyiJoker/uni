export const URL = 'http://localhost:3000'
export const PDF_SCALE_SIZE = 0.6

export const A4_SIZE_IN_PIXELS = {
    width: 1240,
    height: 1754
}

export const HOME_TILES_TYPES = {
    PARTNER_COMPANIES: 'partnerСompanies',
    RETAIL_NETWORK: 'retailNetwork',
    EXCLUSIVE_DISTRIBUTION: 'exclusiveDistribution',
    CONTACTS: 'contacts',
    EVENTS: 'events'
}

export const pagesTransition = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
     },
    exit: { 
        opacity: 0,
    },
}

export const foundFirstDocumentInCatalog = catalog => {
    const documents = catalog.documents

    if ( documents ) {
        const firstDocument = documents[Object.keys( documents )[0]]
        if ( firstDocument ) {
            return firstDocument
        }
    }

    const includes = catalog.includes

    if ( includes ) {
        for (let i = 0; i < Object.keys( includes ).length; i++) {   
            const catalog = Object.keys( includes )[i] && (
                includes[Object.keys( includes )[i]]
            ) 

            if ( catalog ) {
                return foundFirstDocumentInCatalog( catalog )
            }
            
        }
    }

}

export const parseForBeginningDocument = data => {
    for (let i = 0; i < Object.values( data ).length; i++) {
        const catalog = Object.values( data )[i]

        if ( catalog ) {
            return foundFirstDocumentInCatalog( catalog )
        }
    }
}