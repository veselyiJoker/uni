import React, { useState } from 'react'
import { useEffect } from 'react';
import { A4_SIZE_IN_PIXELS, PDF_SCALE_SIZE } from '../../constants/constants'
import { 
    StyledPDFViewer,
    StyledDocument,
    StyledPage
} from './styles'


const PDFViewer = props => {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    useEffect(() => {
        setNumPages(null)
    }, [ props.link ])
    
    return (
        <StyledPDFViewer>
            <StyledDocument
                file = { props.link }
                onLoadSuccess = { onDocumentLoadSuccess }
            >
                {
                    [...Array(numPages).keys()].map(
                        elem => (
                            <StyledPage 
                                key = { `page${ elem + 1 }` }
                                pageNumber = { elem + 1 }
                                width = { A4_SIZE_IN_PIXELS.width * PDF_SCALE_SIZE }
                            />
                        )
                    )
                }
            </StyledDocument>
        </StyledPDFViewer>
    )
}

export default PDFViewer