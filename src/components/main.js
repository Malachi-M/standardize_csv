import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCSVData, setJSONData, exportCSV, handleCheck, clearAllCheck } from '../store/actions'
import styled, { withTheme, css } from 'styled-components'

// Component Imports
import Header from './header'
import Upload from './upload'
import Editor from './editor'

const StyledMain = styled.main`
  padding: 0 5em;
`

const StyledH1 = styled.h1`
  font-size: 4em;
  font-weight: 400;
  letter-spacing: 0.09375rem;
  margin: 0 0 0.5em 0;
  text-align: center;

  ${props => props.theme && css`
    color: ${props.theme.light_primary}
  `}
`

/**
 * Renders either the upload zone or the editor if data is already uploaded.
 */
class Main extends Component {
  state = {
    isDataUploaded: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDataUploaded === false && this.props.jsonData) {
      this.setState({ isDataUploaded: true })
    }
  }

  resetView = () => {
    this.setState({
      isDataUploaded: false
    })
  }

  render() {
    const { csvData, jsonData, setCSVData, setJSONData, csvExport, checked, handleCheck, clearAllCheck, theme } = this.props

    return (
      <React.Fragment>
        <Header
          reset={this.resetView}
          hasData={this.state.isDataUploaded}
          fillColor={theme.background}
        />
        <StyledMain>
          <StyledH1>
            Standardize CSV
          </StyledH1>
          {this.state.isDataUploaded
            ? <Editor
              csvExport={csvExport}
              csvData={csvData}
              data={jsonData}
              checked={checked}
              handleCheck={handleCheck}
              clearAllCheck={clearAllCheck}
              setCsvData={setCSVData}
              setJSONData={setJSONData}
            />
            : <Upload
              setCSVData={setCSVData}
              setJSONData={setJSONData}
            />
          }
        </StyledMain>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  csvData: state.reducer.csvData,
  jsonData: state.reducer.jsonData,
  csvExport: state.reducer.csvExport,
  checked: state.reducer.checked
})

export default connect(mapStateToProps, {
  setCSVData,
  setJSONData,
  exportCSV,
  handleCheck,
  clearAllCheck
})(withTheme(Main))