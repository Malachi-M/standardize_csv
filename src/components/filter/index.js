import React from 'react'
import { Button, Checkbox } from 'styled-material-components'
import styled from 'styled-components'
import { StyledFilterSection, StyledList, StyledH1 } from '../styled-components'
import ActionBar from '../action-bar'

const StyledCheckbox = styled(Checkbox)`
  box-sizing: content-box;
`
const StyledLabel = styled.label`
  vertical-align: middle;
`
const StyledFilterList = styled(StyledList)`
  margin-top: 1em;
`

const StyledFilterListItem = styled.li`
  flex: 0 1 13.5em;
  list-style-type: none;
  margin: 0;
  width: 100%;
  max-width: 11em;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const ResetButton = styled(Button)`
  background-color: ${props => props.theme.warning}
  color: #fff;
  margin-right: 1.25em;
`

/**
 * Renders a section containing a list of checkboxes
 * for each csv column header
 */
export default ({
  updateFields,
  resetFields,
  handleCheck,
  columns,
  checked
}) => (
    <StyledFilterSection>
      <StyledDiv>
        <StyledH1>Select Fields to Keep</StyledH1>
        <ActionBar end='true'>
          <ResetButton
            dense
            raised
            onClick={resetFields}
          >
            Reset ALL Fields
        </ResetButton>
          <Button
            raised
            primary
            dense
            onClick={() => updateFields(Object.keys(checked))}
          >
            Update Fields
        </Button>
        </ActionBar>
      </StyledDiv>
      <StyledFilterList>
        {columns.map((col, idx) => (
          <StyledFilterListItem key={idx}>
            <StyledCheckbox
              id={`check-${idx}`}
              checked={checked[col]}
              onChange={() => {
                handleCheck(col)
              }}
            />
            <StyledLabel htmlFor={`check-${idx}`}>
              {col}
            </StyledLabel>
          </StyledFilterListItem>
        ))}
      </StyledFilterList>
    </StyledFilterSection>
  )