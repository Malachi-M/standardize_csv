import styled from 'styled-components'

export const StyledFilterSection = styled.section`
  padding: 1em;
  background-color: #fff;
  margin: 0 auto 1em;
  border-radius: 2px;
  max-width: ${props => props.theme.maxWidth};
`
export const TableContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  margin: 1.5rem auto 0;
  overflow: auto;
  width: 100%;
  height: calc(100% - 3.75em);
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
export const StyledH1 = styled.h1`
  margin: 0;
  line-height: 1.5;
`