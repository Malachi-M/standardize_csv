import React from 'react'
import styled, { css } from 'styled-components'

const StyledActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  max-width: ${props => props.theme.maxWidth};
  
  ${props => props.opposite && css`
    justify-content: space-between
  `}

  ${props => props.end && css`
    justify-content: flex-end;
  `}
`

export default ({children, opposite, end}) => (
  <StyledActionBar opposite={opposite} end={end}>
    {children}
  </StyledActionBar>
)