import React from 'react'
import {
  StyledHeader,
  StyledNav,
  StyledNavItem,
  StyledUploadBtn
} from './styled'

// Component imports
import CSVIcon from '../icons/csv-svg'

export default ({ hasData, reset, fillColor }) => {
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
