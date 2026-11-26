import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import LabPage from './pages/LabPage'
import Lab2Page from './pages/Lab2Page'
import Lab3Page from './pages/Lab3Page'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/lab2" element={<Lab2Page />} />
        <Route path="/lab3" element={<Lab3Page />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
