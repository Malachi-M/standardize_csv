import React from 'react'
import { Button, Checkbox } from 'styled-material-components'
import styled from 'styled-components'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
const StyledListItem = styled.li`
  flex: 0 1 12.5em;
  list-style-type: none;
  margin: .25em 0 .25em 0;
`
const StyledSection = styled.section`
  padding: 1em;
  background-color: #fff;
  margin: 0 auto 1em;
  border-radius: 2px;
  max-width: ${props => props.theme.maxWidth};
`
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
const StyledH1 = styled.h1`
  margin: 0 0 .75em 0;
`

export default ({
  updateFields,
  handleCheck,
  columns,
  checked
}) => (
  <StyledSection>
          <StyledDiv>
          <StyledH1>Select Fields to Keep</StyledH1>
          <Button 
            raised
            primary
            dense
            onClick={() => updateFields(Object.keys(checked))}
          >
            Update Fields
          </Button>
          </StyledDiv>
          <StyledList>
            {columns.map((col, idx) => (
              <StyledListItem key={idx}>
                <Checkbox
                  id={`check-${idx}`}
                  checked={checked[col]}
                  onChange={() => {
                    handleCheck(col)
                  }}
                />
                <label htmlFor={`check-${idx}`}>
                  {col}
                </label>
              </StyledListItem>
            ))}
          </StyledList>
        </StyledSection>
)