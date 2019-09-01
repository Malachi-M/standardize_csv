import React from 'react'
import styled, { css } from 'styled-components'

// Component imports
import CSVIcon from '../icons/csv-svg'

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2.5em 0;

  ${props => props.theme && css`
    background-color: ${props.theme.light_primary};
  `}
`

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin: 0;
  padding: 0;
  width: 100%;
  `

const StyledNavItem = styled.li`
  list-style-type: none;
  padding: 1em;
  margin-left: 1.5em;
`

const StyledUploadBtn = styled.button`
  appearance: none;
  background-color: inherit;
  border: none;
  font-size: 2em;
  margin-left: 3em;
  padding: .25em .5em;

  ${props => props.theme && css`
    border: 1px solid ${props.theme.light_primary};
    color: ${props.theme.background};

    &:hover {
      border: 1px solid ${props.theme.background};
      border-radius: 5px;
      cursor: pointer;
    }
  `}
`

const Header = ({ hasData, reset, fillColor }) => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavItem>
          <CSVIcon onClick={reset} fill={fillColor} width='48' height='48' />
        </StyledNavItem>
        {hasData && <StyledNavItem>
          <StyledUploadBtn
            onClick={reset}
          >Upload</StyledUploadBtn>
        </StyledNavItem>
        }
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
