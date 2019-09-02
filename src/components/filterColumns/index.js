import React from 'react'
import { Button } from 'styled-material-components'
import { StyledFilterSection, StyledH1 } from '../common-styled-components'
import { StyledCheckbox, StyledLabel, StyledFilterList, StyledFilterListItem, StyledDiv, ResetButton } from './styled'

// Component imports
import ActionBar from '../action-bar'

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