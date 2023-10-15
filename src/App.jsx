import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';


import './App.css'
import router from './Router/Router';
import { theme } from './Theme/Theme';

function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
      <RouterProvider router={router} ></RouterProvider>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
