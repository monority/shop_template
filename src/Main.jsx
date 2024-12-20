import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Root'
import './assets/sass/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
