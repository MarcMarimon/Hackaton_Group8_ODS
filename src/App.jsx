<<<<<<< HEAD
import UserProvider from './app/providers/UserProvider';
=======
import UserProvider from './app/UserProvider';
>>>>>>> Luchi
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <UserProvider>
      <NavBar/>
      <LandingPage/>
    </UserProvider>
  )
}

export default App
