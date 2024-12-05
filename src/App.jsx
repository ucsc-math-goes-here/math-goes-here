import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider, CssBaseline, Typography, Box } from "@mui/material";
import './App.css'

import MainPage from './pages/MainPage'
import LessonLearnInterpolationCurve from './lessons/interpolationCurves/LessonLearnInterpolationCurve'

import HeaderBar from './components/HeaderBar';

import LearnDotProduct from './lessons/dotProduct/Learn'
import ExploreDotProduct from './lessons/dotProduct/Explore'
import QuizDotProduct from './lessons/dotProduct/Quiz'
import MasterDotProduct from './lessons/dotProduct/Mastery'

import { AppThemeProvider } from './contexts/AppThemeContext'


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppThemeProvider>
        <HeaderBar/>
        <Box sx={{paddingTop: "75px"}}/>
        <Router basename="/math-goes-here">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/interpolationcurves_learn" element={<LessonLearnInterpolationCurve />} />
            <Route path="/learn-dot-product" element={<LearnDotProduct/>}/>
            <Route path="/explore-dot-product" element={<ExploreDotProduct/>}/>
            <Route path="/quiz-dot-product" element={<QuizDotProduct/>}/>
            <Route path="/master-dot-product" element={<MasterDotProduct/>}/>
          </Routes>
        </Router>
      </AppThemeProvider>
    </ThemeProvider>
  )
}

export default App
