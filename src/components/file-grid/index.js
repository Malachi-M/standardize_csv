import React from 'react'
import styled from 'styled-components'
import CSVIcon from '../icons/csv-svg'
import { StyledList } from '../styled-components'


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
  max-width: 6em;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const StyledSVG = styled(CSVIcon)`
  width: 3rem;
`
const StyledSpan = styled.span`
  display: block;
  margin: .5rem auto 0;
  font-size: 0.625rem
`

export default ({files}) => (
  <StyledFiledList>
    {files.map((file, idx) => (
      <StyledFileListItem key={`${file}-${idx}`}>
        <StyledSVG 
          fill={`hsla(${174 + (idx * 90)},74%,73%,1)`} 
          height='4em'
          width='4em'
        />
        <StyledSpan>{file}</StyledSpan>
      </StyledFileListItem>
    ))}
  </StyledFiledList>
)