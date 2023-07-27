/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import SignIn from '../pages/SignInPage'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
