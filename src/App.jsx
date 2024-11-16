import { useState } from 'react'
import './App.css'

import MainPage from './pages/MainPage'
import { AppThemeProvider } from './contexts/AppThemeContext'


function App() {
  return (
    <AppThemeProvider>
      <MainPage />
    </AppThemeProvider>
  )
}

export default App
