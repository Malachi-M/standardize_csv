import React from 'react'
import Table from '../table'
import ActionBar from '../action-bar'
import DownloadLink from 'react-csv-creator'
import { Button } from 'styled-material-components'
import { StyledFileSection, StyledH1 } from '../styled-components'
import styled from 'styled-components'

const FileNameH1 = styled(StyledH1)`
  width: 100%;
  max-width: 20em;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export default ({columns, data, headers, filename}) => (
  <StyledFileSection height={'50vh'}>
    <header>
      <ActionBar opposite>
        <FileNameH1>{filename}</FileNameH1>
        <DownloadLink 
          raised
          accent
          filename={`standardized_${filename[0]}`}
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