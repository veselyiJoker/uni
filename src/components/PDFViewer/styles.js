import styled from 'styled-components'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { A4_SIZE_IN_PIXELS, PDF_SCALE_SIZE } from '../../constants/constants'

export const StyledPDFViewer = styled.div`

`

export const StyledDocument = styled(Document)`
    width: ${ A4_SIZE_IN_PIXELS.width * PDF_SCALE_SIZE + 18 }px;
    height: ${ A4_SIZE_IN_PIXELS.height * PDF_SCALE_SIZE }px;
    overflow-y: auto;
`

export const StyledPage = styled(Page)`

`

export const NextPageBtn = styled.button`

`

export const PrevPageBtn = styled.button`
    
`

export const DownloadBtn = styled.button`

`

