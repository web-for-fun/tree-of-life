import React from 'react'

function useInteractEvent() {
  const [totalInteract, updateTotalInteract] = React.useState(0)

  const interactCount = () => {
    updateTotalInteract(totalInteract + 1)
  }

  React.useEffect(() => {
    window.addEventListener('click', interactCount)

    return () => {
      window.removeEventListener('click', interactCount)
    }
  })

  return totalInteract
}

export default useInteractEvent
