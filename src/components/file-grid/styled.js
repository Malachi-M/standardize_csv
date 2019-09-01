import styled from 'styled-components'
import { Button } from 'styled-material-components'
import { StyledList } from '../styled-components'
import CSVIcon from '../icons/csv-svg'

export const StyledButton = styled(Button)`
  height: 100%;
  width: 100%;
  line-height: 1.4;
  padding: 1rem;
`

export const StyledFiledList = StyledList.extend`
  margin-top: 1em;
`
export const StyledFileListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style-type: none;
  margin: .75em;
`
export const StyledSVG = styled(CSVIcon)`
  width: 3rem;
`
export const StyledSpan = styled.span`
  display: block;
  font-size: 0.625rem
  max-width: 7em;
  overflow-y: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
`
