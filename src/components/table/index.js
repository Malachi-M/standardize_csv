import React, { Component } from 'react'
import styled from 'styled-components'
import { TableContainer } from '../styled-components'
import TableHeading from './table-heading'
import Row from './rows'

const Table = styled.table``

/**
 * Renders a simple json based table. Takes data and meta table headings via the columns property
 */
export default class JSONTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data, columns } = this.props
    return (
      <TableContainer>
        <Table>
          <TableHeading headerData={columns} />
          <tbody>
            {
              data.map((row, idx) => <Row key={idx} rowData={row} />)
            }
          </tbody>
        </Table>
      </TableContainer>
    )
  }
}