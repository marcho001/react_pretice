import { createBrowserRouter } from 'react-router-dom'
import TodosPage from '../pages/Todos/Index'

const router = createBrowserRouter([
  {
    path: '/todo',
    element: <TodosPage />
  }
])

export default router
