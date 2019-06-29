import React from 'react'
import styled from '@emotion/styled'
import { treeImages } from '../utils'

const TreeStyle = styled.div`
  width: 300px;
  display: flex;
  align-items: flex-end;
  position: absolute;
  bottom: 18%;
  left: 50%;
  transform: translateX(-50%);

  & > img {
    width: 100%;
  }
`

function Tree({ currentPic }) {
  console.log('dothis')
  const imageData = treeImages.find(item => item.currentPic === currentPic)
  return (
    <TreeStyle>
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
