import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Typography } from "@mui/material";
import './App.css'

import MainPage from './pages/MainPage'
import LessonLearnInterpolationCurve from './lessons/interpolationCurves/LessonLearnInterpolationCurve'
import LessonLearnDotProduct from './lessons/dotProducts/LessonLearnDotProduct'

import { AppThemeProvider } from './contexts/AppThemeContext'


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  console.log("testing run 1");

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppThemeProvider>
        <Router basename="/math-goes-here">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/interpolationcurves_learn" element={<LessonLearnInterpolationCurve />} />
            <Route path="/dotproducts_learn" element={<LessonLearnDotProduct />} />
          </Routes>
        </Router>
      </AppThemeProvider>
    </ThemeProvider>
  )
}

export default App
