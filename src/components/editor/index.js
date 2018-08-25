import React, { Component } from 'react'
import Filter from '../filter'
import { Button } from 'styled-material-components'
import SingleFile from '../preview/single-file'
import MultiFile from '../preview/multi-file'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialFields: this.getInitialFields(this.props.data),
      columns: this.getInitialFields(this.props.data),
      headers: this.getInitialFields(this.props.data).map(field => ({id: field, display: field})),
      initialData: this.setInitialData(this.props.data),
      data: this.setInitialData(this.props.data)
    }
  }

  setInitialData = (data) => {
    const files = Object.keys(data)
    console.log('set initial data in Editor', files.length)
    return (files.length > 1
      ? []
      : this.props.data[files])
  }

  getInitialFields = (data) => (
    Object.keys(data)
      .map((file, idx, arr) => data[file]
        .map(field => Object.keys(field)))
      .reduce((arr, field) => field
        .reduce((arr, line) => [...arr, ...line],[])
      , [])
      .filter((field, idx, arr) => arr.indexOf(field) === idx)
    )

  resetFields = () => {
    this.setState((prevState, props) => ({
      columns: prevState.initialFields,
      data: prevState.initialData
    }))
    this.props.clearAllCheck()
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
    const filenames = Object.keys(this.props.data)
    return (
      <React.Fragment>
        <Filter
          updateFields={this.updateFields}
          resetFields={this.resetFields}
          columns={columns}
          handleCheck={handleCheck}
          checked={checked}
        />
        {filenames.length > 1 
          ? <MultiFile files={filenames} data={data} headers={headers} />
          : <SingleFile columns={columns} data={data} headers={headers} filename={filenames}/>
        }
      </React.Fragment>
    )
  }
}