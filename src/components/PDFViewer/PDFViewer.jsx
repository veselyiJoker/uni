import React, { useState } from 'react'
import { A4_SIZE_IN_PIXELS, PDF_SCALE_SIZE } from '../../constants/constants'
import { 
    StyledPDFViewer,
    StyledDocument,
    StyledPage
} from './styles'


const PDFViewer = props => {
    const [numPages, setNumPages] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }
    
    return (
        <StyledPDFViewer>
            <StyledDocument
                file = { props.link }
                onLoadSuccess = { onDocumentLoadSuccess }
            >
                {
                    Array.from(
                        new Array(numPages),
                        (elem, i) => (
                            <StyledPage 
                                key = { `page${ i + 1 }` }
                                pageNumber = { i + 1 }
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