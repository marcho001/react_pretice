import { createBrowserRouter } from 'react-router-dom'
import TodosPage from '../pages/Todos/Index'
import ErrorPage from '../pages/ErrorPage/Index'
import HomePage from '../pages/Home/Index'
import ProjectPageContent from '../layouts/ProjectPageContent'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/project',
    element: <ProjectPageContent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'todo',
        element: <TodosPage />
      }
    ]
  }
])

export default router
