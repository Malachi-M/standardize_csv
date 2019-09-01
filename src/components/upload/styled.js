import styled, { css } from 'styled-components'
import Dropzone from 'react-dropzone'

export const StyledSection = styled.section`
  margin: auto;
  max-width: ${props => props.theme.maxWidth};
`
export const StyledDropzone = styled(Dropzone)`
  border: 2px dashed #fff;
  background: linear-gradient(#fff, #fff) padding-box,linear-gradient(to bottom, #45a6f5, #48ea89 49%, #ff512f) border-box;
  height: 70vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 1.5em 0 0;
  border-radius: 25px;
  overflow:auto;
`
export const StyledDiv = styled.div`
  background-color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const StyledPrompt = styled.span`
  color: #c3c3c3;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: bold;
  margin-top: 5em;
`
export const StyledBrowse = styled.span`
  color: #45a6f5;

  ${props => props.theme && css`
    color: ${props.theme.light_primary}
  `}
`