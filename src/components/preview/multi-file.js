import React from 'react'
import FileGrid from '../file-grid'
import { Button } from 'styled-material-components'
import ActionBar from '../action-bar'
import DownloadLink from 'react-csv-creator'
import { StyledFileSection } from '../styled-components'

export default ({data, headers, files}) => (
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
    <FileGrid files={files} />
  </StyledFileSection>
)
