import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { App } from './app.tsx'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const client = new QueryClient()

const router = createBrowserRouter([{
  path: '/',
  element: <App />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router}/>
    </QueryClientProvider>
  </React.StrictMode>,
)
