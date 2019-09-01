import React from 'react'
import DownloadLink from 'react-csv-creator'
import { Button } from 'styled-material-components'
import { StyledFileSection, StyledH1 } from '../styled-components'
import { FileNameSpan } from './styled'

// Component imports
import ActionBar from '../action-bar'
import Table from '../table'

/**
 * Renders a section displaying a table, file name, and button to download updated csv. The table of the data contained within the csv file updates with any changes propogated via the filter component. 
 */
export default ({ columns, data, headers, filename }) => (
  <StyledFileSection height={'50vh'}>
    <header>
      <ActionBar opposite>
        <div>
          <StyledH1>File Name</StyledH1>
          <FileNameSpan>{filename}</FileNameSpan>
        </div>
        <DownloadLink
          raised
          accent
          filename={`standardized_${filename[0].split('.')[0]}`}
          headers={headers}
          rows={data}
        >
          <Button raised accent dense>
            Export CSV
          </Button>
        </DownloadLink>
      </ActionBar>
    </header>
    <Table data={data} columns={columns} />
  </StyledFileSection>
)
