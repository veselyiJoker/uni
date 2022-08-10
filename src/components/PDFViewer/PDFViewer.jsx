import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { StyledPDFViewer } from './styles'

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    const handlerNextPageButtonClick = () => {
        if (pageNumber < numPages) {
            setPageNumber(pageNumber + 1)
        }
    }
    
    return (
        <StyledPDFViewer>
            <button onClick = { handlerNextPageButtonClick }>Next</button>

            <button>
                Обработка персональных данных
            </button>
            <button>
                Нормативные документы
            </button>
            <button>
                Рабочие документы
            </button>
            <Document file = '/test.pdf' onLoadSuccess = { onDocumentLoadSuccess }>
                <Page height = { 1754 * 0.75 }  pageNumber = { pageNumber } />
            </Document>
            <p>
                Page { pageNumber } of { numPages }
            </p>
            
        </StyledPDFViewer>
    );
}

export default PDFViewer