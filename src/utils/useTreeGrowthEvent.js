//n can be any number >= 1
import React from 'react'

function useTreeGrowthEvent(totalInteract) {
  const [currentPic, setCurrentPic] = React.useState(1)
  const [nextUserInteractCount, setNextUserInteractCount] = React.useState(2)

  if (totalInteract === nextUserInteractCount) {
    setCurrentPic(currentPic + 1)
    setNextUserInteractCount(Math.ceil(nextUserInteractCount * 1.2))
  }

  console.log(nextUserInteractCount)

  return currentPic
}

export default useTreeGrowthEvent
