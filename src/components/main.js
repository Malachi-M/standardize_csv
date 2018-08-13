import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCSVData, setJSONData, exportCSV, handleCheck } from '../actions'
import Upload from './upload'
import Editor from './editor'
import styled, { css } from 'styled-components'

const StyledMain = styled.main`
  padding: 0 5em;
`
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3.5em 0;
`
const StyledH1 = styled.h1`
  font-size: 4em;
  letter-spacing: 0.09375rem;
  font-weight: 400;
  color: rgb(48, 58, 82);
  margin: 0;

  ${props => props.theme && css`
    color: ${props.theme.dark_primary}
  `}
`

class Main extends Component {
  state = {
    isDataUploaded: false
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isDataUploaded === false && this.props.jsonData) {
      this.setState({ isDataUploaded: true })
    }
  }

  render() {
    const { csvData, jsonData, setCSVData, setJSONData, csvExport, checked, handleCheck } = this.props
    return (
      <React.Fragment>
        <StyledHeader>
          <StyledH1>
            Standardize CSV
          </StyledH1>
        </StyledHeader>
        <StyledMain>
          {this.state.isDataUploaded
            ? <Editor
              csvExport={csvExport}
              csvData={csvData}
              data={jsonData}
              checked={checked}
              handleCheck={handleCheck}
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
  handleCheck
})(Main)