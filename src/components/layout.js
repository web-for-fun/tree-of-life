import React from 'react'
import { css, Global } from '@emotion/core'

/**
 * Global style can edit here.
 */
const globalStyle = css`
  html,
  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Rubik Mono One', sans-serif;
    cursor: pointer;
    user-select: none;
  }
`

/**
 * Layout function which is used in every component
 * @param {Object} props - props
 * @param {React.ReactNode} props.children - react children
 */
function Layout({ children }) {
  return (
    <div>
      {children}
      <Global styles={globalStyle} />
    </div>
  )
}

export default Layout
