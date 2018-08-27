import React from 'react'
import FileGrid from '../file-grid'
import { Button } from 'styled-material-components'
import ActionBar from '../action-bar'
import DownloadLink from 'react-csv-creator'
import { StyledFileSection } from '../styled-components'

/**
 * Component to render UI when multiple files are uploaded.
 * Rendrs a grid and a button to download all files. 
 * TODO: It will provide an option to download multiple files
 * that have been updated.
 */
export default ({data, headers, files, onGridClick}) => (
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
