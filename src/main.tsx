import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Top } from './pages/top.js'
import { DesignRule } from './pages/design-rule.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Top />
  },
  {
    path: '/about',
    element: <Top />
  },
  {
    path: '/design-rule',
    element: <DesignRule />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
