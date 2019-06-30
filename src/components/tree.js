import React from 'react'
import styled from '@emotion/styled'
import { treeImages } from '../utils'

const TreeStyle = styled.div`
  width: 300px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: ${props => (props.isEnd ? '-10%' : '18%')};
  left: 50%;
  transform: translateX(-50%);
  transform: ${props => (props.isEnd ? 'rotate(90deg)' : '')};

  & > img {
    width: 100%;
  }
`

function Tree({ currentPic, isEnd }) {
  const imageData = treeImages.find(item => item.currentPic === currentPic)
  return (
    <TreeStyle isEnd={isEnd}>
      {typeof imageData !== 'undefined' ? (
        <img
          src={treeImages.find(item => item.currentPic === currentPic).image}
          alt='Your loving tree'
        />
      ) : (
        <div>no image</div>
      )}
    </TreeStyle>
  )
}

export default Tree
