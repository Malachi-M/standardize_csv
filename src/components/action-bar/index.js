import React from 'react'
import styled, { css } from 'styled-components'

const StyledActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${props => props.margin ? '0 auto' : '0'};
  max-width: ${props => props.theme.maxWidth};
  
  ${props => props.opposite && css`
    justify-content: space-between
  `}
`

export default ({children, opposite, end}) => (
  <StyledActionBar opposite={opposite} end={end}>
    {children}
  </StyledActionBar>
)