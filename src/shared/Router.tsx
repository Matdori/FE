import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignInPage'
import EquipmentInquiry from '../pages/Equipment/EquipmentInquiryPage'
import Ask from '../pages/AskPage'
import Dashboard from '../pages/DashboardPage'


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="equipmentinquiry" element={<EquipmentInquiry />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="ask" element={<Ask />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router
