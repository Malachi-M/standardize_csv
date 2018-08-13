import React from 'react'
import styled from 'styled-components'

const TableRow = styled.tr`
  height: 3rem;
  vertical-align: middle;
  border-color: inherit;
  border-spacing: 0;
  border-collapse: collapse;
`

const TableCell = styled.td`
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.8125rem;
  font-weight: 400;
  text-align: right;
  padding: .25rem 3.5rem .25rem 1.5rem;
  border-bottom: 1px solid rgba(224,224,224,1);
`

export default ({rowData}) => (
  <TableRow>
    {
      Object.keys(rowData).map((cellData, idx) => <TableCell key={idx}>{rowData[cellData]}</TableCell>)
    }
  </TableRow>
)