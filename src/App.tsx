
import { Route, Routes,Navigate } from 'react-router-dom'
import { Cover} from './pages/Cover'
import { LogIn } from './pages/LogIn'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { NewTasks } from './pages/newTasks'
import { ViewAllTask } from './pages/ViewAllTasks'
import { useAuthStore } from './Store/Auth'


function App() {
  const {isAuthenticated}= useAuthStore()
  return (
 <Routes>
  <Route path='/' element={<Cover />} />
  <Route path='/login' element={<LogIn />} />
  <Route path='/home'  element={isAuthenticated ? <Home/> : <Navigate to="/login" />} />
  <Route path='/dashboard'  element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
  <Route path='/tasks'  element={isAuthenticated ? <NewTasks />  : <Navigate to="/login" />}/>
  <Route path='/tasklist'  element={isAuthenticated ? <ViewAllTask/> : <Navigate to="/login" />}/>
  

 </Routes>

  )
}

export default App
