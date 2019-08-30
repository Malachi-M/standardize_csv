import React from 'react'
import styled from 'styled-components'

const TableHeader = styled.thead`
  font-size: .75em;
  font-weight: 500;
  color: rgba(0,0,0,0.54);  
  text-align: right;
`
const HeaderRow = styled.tr`
  height: 3.5rem;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  border-collapse: collapse;
`
const HeaderCell = styled.th`
  padding: .25rem 3.5rem .25rem 1.5rem;
  border-bottom: 1px solid rgba(224,224,224,1);
`

export default ({ headerData }) => (
  <TableHeader>
    <HeaderRow>
      {
        Object.keys(headerData).map((headerContent, idx) => <HeaderCell key={idx}>{headerData[headerContent]}</HeaderCell>)
      }
    </HeaderRow>
  </TableHeader>
)
