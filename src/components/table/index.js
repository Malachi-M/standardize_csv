import React, {Component} from 'react'
import styled from 'styled-components'
import TableHeading from './table-heading'
import Row from './rows'


const TableContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  height: 100%;
  max-height: ${props => props.height};
  margin: 1rem auto 0;
  overflow: auto;
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
`
const Table = styled.table``

export default class JSONTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data, columns, height } = this.props
    

    return (
      <TableContainer height={height}>
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