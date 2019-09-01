import React, { Component } from 'react'
import { TableContainer, Table } from './styled'

// Component imports
import TableHeading from './table-heading'
import Row from './rows'

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