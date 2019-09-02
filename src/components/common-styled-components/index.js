import styled from 'styled-components'

export const StyledH1 = styled.h1`
line-height: 1.5;
font-weight: 500;
margin: 0;
`

export const StyledFilterSection = styled.section`
  padding: 1em;
  background-color: #fff;
  margin: 0 auto 1em;
  border-radius: 2px;
  max-width: ${props => props.theme.maxWidth};
`

export const StyledFileSection = StyledFilterSection.extend`
  height: ${props => props.height}
`

export const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
