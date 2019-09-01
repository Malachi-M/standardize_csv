import styled from 'styled-components'
import { Button, Checkbox } from 'styled-material-components'
import { StyledList } from '../styled-components'


export const StyledCheckbox = styled(Checkbox)`
  box-sizing: content-box;
`
export const StyledLabel = styled.label`
  vertical-align: middle;
`
export const StyledFilterList = styled(StyledList)`
  margin-top: 1em;
`

export const StyledFilterListItem = styled.li`
  flex: 0 1 13.5em;
  list-style-type: none;
  margin: 0;
  width: 100%;
  max-width: 11em;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ResetButton = styled(Button)`
  background-color: ${props => props.theme.warning}
  color: #fff;
  margin-right: 1.25em;
`
