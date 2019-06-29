import React from 'react'
import styled from '@emotion/styled'
import Layout from './components/layout'
import { useInteractEvent, useTreeGrowthEvent } from './utils'
import Header from './components/header'
import MouseClick from './images/IconMouse1.svg'
import MouseUp from './images/IconMouse2.svg'
import Tree from './components/tree'

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 180px;
  background: #99cc33;
  color: #fff;
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleText = styled.div`
  color: #ff9966;
  font-size: 6rem;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -140%);
`

const MouseAnimation = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
`

function App() {
  const totalInteract = useInteractEvent()
  const currentPic = useTreeGrowthEvent(totalInteract)
  const [isMouseClick, setMouseClick] = React.useState(false)

  React.useEffect(() => {
    const mouseTime = setInterval(() => setMouseClick(!isMouseClick), 1000)

    return () => {
      clearInterval(mouseTime)
    }
  })

  return (
    <Layout>
      <Header />
      <TitleText>
        PLANT
        <br />
        TREE
      </TitleText>
      <MouseAnimation>
        {isMouseClick ? (
          <img src={MouseClick} alt='mouse click' />
        ) : (
          <img src={MouseUp} alt='mouse up' />
        )}
      </MouseAnimation>
      <Tree currentPic={currentPic} />
      <Footer>BY TONMAI</Footer>
    </Layout>
  )
}

export default App
