import { BrowserRouter, RouteObject, useRoutes } from 'react-router-dom'
import AuthRouter from './auth'
import { routes } from './routes'

const AppRouter = () => {
  const Router = () => useRoutes(routes as RouteObject[])

  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
}

export default AppRouter
