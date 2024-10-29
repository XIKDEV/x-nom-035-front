import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nom35App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Nom35App />
  </StrictMode>,
)
