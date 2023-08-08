import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LicensePage from './pages/LicensePage'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddNewProject from './pages/AddNew';
import StartingPage from './pages/StartingPage';
import Callback from './components/callback';
import ProtectedRoute from './utils/ProtectedRoutes'
import Login from './pages/Login'
import ProtectedRoutes from './utils/ProtectedRoutes'

function App() {

  return (
    <Router>
      <main className='max-w-5xl mx-auto'>
        <Navbar />
        <Routes>
          <Route element={<ProtectedRoutes />}>
          </Route>
          <Route path='/dashboard' element={<HomePage />} />
          <Route path='/addNew' element={<AddNewProject />} />
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<StartingPage />} />
          <Route path='/callback' element={<Callback />} />
          <Route path='/license' element={<LicensePage />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
