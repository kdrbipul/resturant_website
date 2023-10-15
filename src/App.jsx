import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';

import './App.css'
import router from './Router/Router';

function App() {
  

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} ></RouterProvider>
    </>
  )
}

export default App
