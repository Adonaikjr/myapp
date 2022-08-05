import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import theme from './src/theme'
import GlobalStyles from './src/Global'

import { Routes } from './src/routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ThemeProvider theme={theme}>
    <GlobalStyles/>
          <Routes/>
    </ThemeProvider>
  </React.StrictMode>
)
