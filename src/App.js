import React from 'react'
import styled from '@emotion/styled'
import Layout from './components/layout'

const MainApp = styled.div`
  color: pink;
`

function App() {
  return (
    <Layout>
      <MainApp>Hello World!</MainApp>
    </Layout>
  )
}

export default App
