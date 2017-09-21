import React from 'react'
import Topbar from './Topbar'
import SideNavigation from './SideNavigation'
import styled from 'styled-components'

const Content = styled.div`
  width: calc(100vw - 250px);
  height: calc(100vh - 88px);
  transform: translate3d(250px, 100px, 0);
`

export const AppShell = props => (
  <div>
    <Topbar />
    <SideNavigation />
    <Content>{props.children}</Content>
  </div>
)

export default AppShell
