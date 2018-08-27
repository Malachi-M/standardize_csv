import React, { Component } from 'react'
import Filter from '../filter'
import { Button } from 'styled-material-components'
import SingleFile from '../preview/single-file'
import MultiFile from '../preview/multi-file'

/**
 * Smart component that provides the functionality for its child components.
 */
export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initialFields: this.getInitialFields(this.props.data),
      columns: this.getInitialFields(this.props.data),
      headers: this.getInitialFields(this.props.data).map(field => ({id: field, display: field})),
      initialData: this.setInitialData(this.props.data),
      data: this.setInitialData(this.props.data),
      grid: true
    }
  }

  /**
   * TODO:
   * [x] On Grid Click set the data so that the single file component
   * is rendered.
   * [] On reset fields click the multi file grid should be rendered. 
   * [] 
   */

  setInitialData = (data) => {
    const files = Object.keys(data)
    return (files.length > 1
      ? []
      : this.props.data[files])
  }

  /**
   * getInitialFields() is written in a functional design. The same
   * functionality can easily be completed with the following:
   * ```
   *  getInitialFields = (filesObject) => {
   *    let uniqueKeys = new Set()
   *    for (let file in filesObject) {
   *      filesObject[file].forEach((row) => {
   *        Object.keys(row).forEach(value => {
   *          uniqueKeys.add(value)
   *        })
   *      })
   *    }
   *    return [...uniqueKeys]
   *  }
   * ```
   */
  getInitialFields = (data) => (
    Object.keys(data)
      .map(file => data[file]
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

  fileGridClick = (file) => {
    this.setInitialData(this.props.data[file])
    this.setState((prevState, props) => ({grid: false}))
  }

  render() {
    const { checked, handleCheck } = this.props
    const { columns, data, headers, grid } = this.state
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
        {filenames.length > 1 && grid
          ? <MultiFile 
            files={filenames}
            data={data}
            headers={headers}
            columns={columns}
            onGridClick={this.fileGridClick}
            grid
          />
          : <SingleFile columns={columns} data={data} headers={headers} filename={filenames}/>
        }
      </React.Fragment>
    )
  }
}