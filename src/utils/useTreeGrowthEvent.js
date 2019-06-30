//n can be any number >= 1
import React from 'react'

function useTreeGrowthEvent(totalInteract) {
  const [currentPic, setCurrentPic] = React.useState(1)
  const [nextUserInteractCount, setNextUserInteractCount] = React.useState(2)

  function resetTreeGrowthEvent() {
    setCurrentPic(1)
    setNextUserInteractCount(2)
  }

  if (totalInteract === nextUserInteractCount) {
    setCurrentPic(currentPic + 1)
    setNextUserInteractCount(Math.ceil(nextUserInteractCount * 1.2))
  }

  return { currentPic, resetTreeGrowthEvent }
}

export default useTreeGrowthEvent
