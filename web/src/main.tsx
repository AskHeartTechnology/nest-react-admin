import { createRoot } from 'react-dom/client'
import AppRouter from '@/router'
import ThemeConfig from '@/components/ThemeConfig'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <ThemeConfig>
    <AppRouter />
  </ThemeConfig>,
)
