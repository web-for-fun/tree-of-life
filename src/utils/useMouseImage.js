import React from 'react'

function useMouseImage() {
  const [isMouseClick, setMouseClick] = React.useState(false)

  React.useEffect(() => {
    const mouseTime = setInterval(() => setMouseClick(!isMouseClick), 1000)

    return () => clearInterval(mouseTime)
  })

  return isMouseClick
}

export default useMouseImage
