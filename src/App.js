import React from 'react'
import styled from '@emotion/styled'
import Layout from './components/layout'
import {
  useInteractEvent,
  useTreeGrowthEvent,
  useMouseImage,
  useTimer,
  getTime,
} from './utils'
import Header from './components/header'
import MouseClick from './images/IconMouse1.svg'
import MouseUp from './images/IconMouse2.svg'
import Tree from './components/tree'
import RestartIcon from './images/IconRestart.svg'

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 180px;
  background: ${props => (props.isEnd ? '#D2BB9C' : '#99cc33')};
  color: #fff;
  font-size: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TimerText = styled.div`
  color: #ff9966;
  font-size: 1.4rem;
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

const EndgameText = styled(TitleText)`
  font-size: 1.4rem;
  width: 80%;
  transform: translate(-50%, -300%);
`

const MouseAnimation = styled.div`
  width: 130px;
  height: 130px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -75%);
`

const RestartButton = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & > img {
    width: 100%;
  }
`

function App() {
  const { totalInteract, isStart, resetInteractEvent } = useInteractEvent()
  const { currentPic, resetTreeGrowthEvent } = useTreeGrowthEvent(totalInteract)
  const isMouseClick = useMouseImage()
  const { count, resetCount } = useTimer(isStart)
  // control timing here
  const isEnd = count >= 115

  function handleClick() {
    resetInteractEvent()
    resetTreeGrowthEvent()
    resetCount()
  }

  return (
    <Layout>
      <Header />
      <TimerText>{getTime(count)}</TimerText>
      {!isStart && (
        <TitleText>
          PLANT
          <br />
          TREE
        </TitleText>
      )}
      {isEnd && (
        <EndgameText>
          BECAUSE THE TREE DOESN'T GROWTH AS FAST AS YOU CLICK HERE.
          <br />
          SAVE THE WORLD, SAVE THE GREEN.
        </EndgameText>
      )}
      <MouseAnimation>
        {!isStart &&
          (isMouseClick ? (
            <img src={MouseClick} alt='mouse click' />
          ) : (
            <img src={MouseUp} alt='mouse up' />
          ))}
      </MouseAnimation>
      <Tree isEnd={isEnd} currentPic={currentPic} />
      {isEnd && (
        <RestartButton onClick={() => handleClick()}>
          <img src={RestartIcon} alt='restart' />
        </RestartButton>
      )}
      <Footer isEnd={isEnd}>{isEnd ? 'GAME OVER' : 'BY TONMAI'}</Footer>
    </Layout>
  )
}

export default App
