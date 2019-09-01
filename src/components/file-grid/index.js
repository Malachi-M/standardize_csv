import React from 'react'

import {
  StyledButton,
  StyledSVG,
  StyledSpan,
  StyledFiledList,
  StyledFileListItem
} from './styled'

/**
 * This component takes an array of file names and click listener to generate an icon and dipslays its name in a grid layout.
 */
export default ({ files, onGridClick }) => (
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