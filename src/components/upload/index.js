import React, { Component } from 'react'
import {
  StyledSection,
  StyledDropzone,
  StyledDiv,
  StyledPrompt,
  StyledBrowse
} from './styled'

//  Component imports
import ActionBar from '../action-bar'
import CSVIcon from '../icons/csv-svg'

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
