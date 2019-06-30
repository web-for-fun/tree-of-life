import React from 'react'

function useInteractEvent() {
  const [totalInteract, updateTotalInteract] = React.useState(0)
  const [isStart, setIsStart] = React.useState(false)

  const interactCount = () => {
    updateTotalInteract(totalInteract + 1)
    setIsStart(true)
  }

  function resetInteractEvent() {
    window.removeEventListener('click', interactCount)
    setIsStart(false)
    updateTotalInteract(0)
  }

  React.useEffect(() => {
    window.addEventListener('click', interactCount)

    return () => window.removeEventListener('click', interactCount)
  })

  return { totalInteract, isStart, resetInteractEvent }
}

export default useInteractEvent
