import React from 'react'
import styled from 'styled-components'
import CSVIcon from '../icons/csv-svg'
import { StyledList } from '../styled-components'
import { Button } from 'styled-material-components'
import Table from '../table'

const StyledButton = styled(Button)`
  height: 100%;
  width: 100%;
  line-height: 1.4;
  padding: 1rem;
`

const StyledFiledList = StyledList.extend`
  margin-top: 1em;
`
const StyledFileListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: .75em;
`
const StyledSVG = styled(CSVIcon)`
  width: 3rem;
`
const StyledSpan = styled.span`
  display: block;
  font-size: 0.625rem
  max-width: 7em;
  overflow-y: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
`

/**
 * This component takes an array of file names and click listener to generate an icon and dipslays its name in a grid layout.
 */
export default ({files, onGridClick}) => (
  <StyledFiledList>
    {files.map((file, idx) => (
      <StyledFileListItem key={`${file}-${idx}`}>
        <StyledButton
          onClick={() => onGridClick(file)}
        >
          <StyledSVG 
            fill={`hsla(${174 + (idx * 90)},74%,73%,1)`} 
            height='4em'
            width='4em'
          />
          <StyledSpan>{file}</StyledSpan>
        </StyledButton>
      </StyledFileListItem>
    ))}
  </StyledFiledList>
)