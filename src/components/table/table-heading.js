import React from 'react'
import {
  TableHeader,
  HeaderRow,
  HeaderCell
} from './styled'

export default ({ headerData }) => (
  <TableHeader>
    <HeaderRow>
      {
        Object.keys(headerData).map((headerContent, idx) => <HeaderCell key={idx}>{headerData[headerContent]}</HeaderCell>)
      }
    </HeaderRow>
  </TableHeader>
)
