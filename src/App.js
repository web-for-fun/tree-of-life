import React from 'react'
import styled from '@emotion/styled'
import Layout from './components/layout'
import { useInteractEvent, useTreeGrowthEvent } from './utils'

const MainApp = styled.div`
  color: pink;
`

function App() {
  const totalInteract = useInteractEvent()
  const currentPic = useTreeGrowthEvent(totalInteract)

  return (
    <Layout>
      <MainApp>Hello World!</MainApp>
      <div>you interact: {totalInteract} time(s)</div>
    </Layout>
  )
}

export default App
