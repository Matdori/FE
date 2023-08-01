import { RecoilRoot } from 'recoil'
import Router from './shared/Router'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </>
  )
}

export default App
