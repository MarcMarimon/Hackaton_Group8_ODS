import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Cursos from './components/Cursos.jsx'
import UserProvider from './app/UserProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LandingPage />}></Route>
          <Route path='/cursos' element={<Cursos />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  </UserProvider>
)
