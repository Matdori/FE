import { styled } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

const LayoutContainerDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: #94c1ff;
`
const LayoutSidebarDiv = styled.div`
  width: 20%;
  background-color: #ffc158;
  // padding-left: 30px;
`

const LayoutPageDiv = styled.div`
  width: 80%;
  background-color: #c380c3;
`

const LayoutHeaderDiv = styled.div`
  align-self: flex-start;
  flex-basis: 100%;
  height: 5vh;
  // padding-left: 30px;
  background-color: #ff7d7d;
`

const LayoutContentDiv = styled.div`
  flex: 3;
  height: 90vh;
  // padding-left: 30px;
  background-color: yellow;
`

const LayoutFooterDiv = styled.div`
  flex-basis: 100%;
  height: 5vh;
  // padding-left: 30px;
  background-color: #a6eaa6;
`

function Layout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <LayoutContainerDiv>
      <LayoutSidebarDiv>
        <Sidebar />
      </LayoutSidebarDiv>
      <LayoutPageDiv>
        <LayoutHeaderDiv>
          <Header />
        </LayoutHeaderDiv>
        <LayoutContentDiv>{children}</LayoutContentDiv>
        <LayoutFooterDiv>
          <Footer />
        </LayoutFooterDiv>
      </LayoutPageDiv>
    </LayoutContainerDiv>
  )
}

export default Layout
