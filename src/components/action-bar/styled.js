import styled, { css } from 'styled-components'

export const StyledActionBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: ${props => props.margin ? '0 auto' : '0'};
  max-width: ${props => props.theme.maxWidth};
  
  ${props => props.opposite && css`
    justify-content: space-between
  `}
`
