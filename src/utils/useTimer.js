import React from 'react'

function useTimer(isStart) {
  const [count, setCount] = React.useState(0)

  function resetCount() {
    setCount(0)
  }

  React.useEffect(() => {
    const myTime = isStart && setInterval(() => setCount(count + 1), 1000)

    return () => clearInterval(myTime)
  }, [count, isStart])
  return { count, resetCount }
}

export default useTimer
