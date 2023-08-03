import { RecoilRoot } from 'recoil'
import Router from './shared/Router'
import GlobalStyle from './GlobalStyle'
import 'bootstrap/dist/css/bootstrap.min.css'

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
