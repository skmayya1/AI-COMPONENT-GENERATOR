import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Playground from './Pages/Playground.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/playground',
    element: <Playground/>,
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
)
