import React from 'react'
import { TableRow, TableCell } from './styled'

export default ({ rowData }) => (
  <TableRow>
    {
      Object.keys(rowData).map((cellData, idx) => <TableCell key={idx}>{rowData[cellData]}</TableCell>)
    }
  </TableRow>
)
