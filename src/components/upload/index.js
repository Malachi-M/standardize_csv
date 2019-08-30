import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import styled, { css } from 'styled-components'
import CSVIcon from '../icons/csv-svg'
import ActionBar from '../action-bar'

const StyledSection = styled.section`
  margin: auto;
  max-width: ${props => props.theme.maxWidth};
`
const StyledDropzone = styled(Dropzone)`
  border: 2px dashed #fff;
  background: linear-gradient(#fff, #fff) padding-box,linear-gradient(to bottom, #45a6f5, #48ea89 49%, #ff512f) border-box;
  height: 70vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1.5em 0 0;
  border-radius: 25px;
  overflow:auto;
`
const StyledDiv = styled.div`
  background-color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const StyledPrompt = styled.span`
  color: #c3c3c3;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 5em;
`
const StyledBrowse = styled.span`
  color: #45a6f5;

  ${props => props.theme && css`
    color: ${props.theme.light_primary}
  `}
`

/**
 * Renders a drag and drop file upload zone. The process of uploading involves sending the file data to the redux store.
 */
export default class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropzoneActive: false,
    }
  }

  onDragEnter = () => {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave = () => {
    this.setState({
      dropzoneActive: false
    });
  }

  onDrop = (acceptedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader()
      reader.onload = () => {
        const fileAsBinaryString = reader.result
        // do whatever you want with the file content
        this.props.setCSVData(fileAsBinaryString)
        this.props.setJSONData(file.name, fileAsBinaryString)
      };
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')

      reader.readAsBinaryString(file)
    })
  }

  render() {
    const { dropzoneActive } = this.state

    return (
      <StyledSection>
        <ActionBar>
        </ActionBar>
        <StyledDropzone
          accept='text/csv'
          onDrop={this.onDrop}
          onDragEnter={this.onDragEnter}
          onDragLeave={this.onDragLeave}
        >
          <StyledDiv>
            <CSVIcon fill="hsla(222, 26%, 25%, 1)" />
            <StyledPrompt>
              Drag and Drop a CSV file or <StyledBrowse>browse</StyledBrowse> for a file to upload</StyledPrompt>
          </StyledDiv>
        </StyledDropzone>
      </StyledSection>
    )
  }
}
