import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AnimateOnSlide from './AnimateOnSlide/AnimateOnSlide.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

AOS.init({
  duration: 1000,
  easing: 'ease',
  once: true,
  mirror: false,
  offset: 300
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>,
)
