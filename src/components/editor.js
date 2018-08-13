import React, { Component } from 'react'
import Filter from './filter'
import Table from './table'
import ActionBar from './action-bar'
import DownloadLink from 'react-csv-creator'
import { Button } from 'styled-material-components'
import styled from 'styled-components'

const ResetButton = styled(Button)`
  background-color: ${props => props.theme.warning}
  color: #fff;
  margin-right: 1.25em;
`

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialFields: Object.keys(this.props.data[0]),
      columns: Object.keys(this.props.data[0]),
      headers: Object.keys(this.props.data[0]).map(field => ({id: field, display: field})),
      initialData: this.props.data,
      data: this.props.data
    }
  }

  resetFields = () => {
    this.setState((prevState, props) => ({
      columns: prevState.initialFields,
      data: prevState.initialData
    })) 
  }

  updateFields = fields => {
    this.setState((prevState, props) => {
      const filterFields = field => fields.includes(field) && props.checked[field]
      const updatedColumns = prevState.columns.filter(filterFields)
      const updatedHeaders = prevState.headers.filter(field => fields.includes(field.id) && props.checked[field.id])
      const updatedData = prevState.data.map(datem => { 
        return Object.keys(datem).filter(filterFields)
          .map(key => ({[key]: datem[key]}))
          .reduce((acc, curr) => ({...acc, ...curr}),{})     
      })
      return {
        columns: updatedColumns,
        data: updatedData,
        headers: updatedHeaders
      }
    })
  }

  render() {
    const { checked, handleCheck } = this.props
    const { columns, data, headers } = this.state

    return (
      <React.Fragment>
        <Filter
          updateFields={this.updateFields}
          columns={columns}
          handleCheck={handleCheck}
          checked={checked}
        />
        <ActionBar end='true'>
          <ResetButton
            raised
            onClick={this.resetFields}
          >
            Reset ALL Fields
          </ResetButton>
          <DownloadLink 
            raised
            accent
            filename='test.csv'
            headers={headers}
            rows={data}
          >
            <Button 
              raised
              accent
            >
              Export CSV
            </Button>
          </DownloadLink>
        </ActionBar>
        <Table
          data={data}
          columns={columns}
          height={'72.5vh'}
        />
      </React.Fragment>
    )
  }
}

