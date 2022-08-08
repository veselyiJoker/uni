import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { StyledPDFViewer } from './styles'

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    

    return (
        <StyledPDFViewer>
            <Document file='https://arxiv.org/pdf/2009.14740.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page height={ 800 }  pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </StyledPDFViewer>
    );
}

export default PDFViewer