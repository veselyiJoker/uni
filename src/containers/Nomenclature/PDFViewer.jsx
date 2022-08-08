import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import { StyledPDFViewer } from './styles'

const PDFViewer = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }
    

    return (
        <StyledPDFViewer>
            <Document file='../../assets/testPDF.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </StyledPDFViewer>
    );
}

export default PDFViewer