import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router.jsx'
import { RouterProvider } from 'react-router'
import AnimateOnSlide from './AnimateOnSlide/AnimateOnSlide.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1500,
  easing: 'ease',
  once: true,
  mirror: false,
  offset: 300
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
