import UserProvider from './app/UserProvider';
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
