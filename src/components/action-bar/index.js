import React from 'react'
import { StyledActionBar } from './styled'

/**
 * Renders a div to hold buttons or other CTA elements
 */
export default ({ children, opposite, end }) => (
  <StyledActionBar opposite={opposite} end={end}>
    {children}
  </StyledActionBar>
)
