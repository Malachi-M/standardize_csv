import React from 'react'
import { Button } from 'styled-material-components'
import { StyledFileSection } from '../common-styled-components'
import DownloadLink from 'react-csv-creator'

// Component imports
import FileGrid from '../file-grid'
import ActionBar from '../action-bar'

/**
 * Component to render UI when multiple files are uploaded.
 * Rendrs a grid and a button to download all files. 
 * TODO: It will provide an option to download multiple files
 * that have been updated.
 */
export default ({ data, headers, files, onGridClick }) => (
  <StyledFileSection height={'50vh'}>
    <header>
      <ActionBar end='true'>
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
            Export All CSV Files
          </Button>
        </DownloadLink>
      </ActionBar>
    </header>
    <FileGrid files={files} onGridClick={onGridClick} />
  </StyledFileSection>
)
