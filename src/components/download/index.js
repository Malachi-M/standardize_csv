import React from 'react'
/**
 * Scaffold for provding multi file download functionality.
 * TODO: complete logic required
 */
export default ({
  disabled,
  filenames,
  datasets,
  children,
  text,
  className
}) => {
  const formatData = () => { }

  const downLoadCSVFiles = () => { }

  const handleClick = () => { }

  return (
    children
      ? children
      : <button
        onClick={disabled ? null : handleClick}
        className={className}
      >
        {text}
      </button>
  )
}
