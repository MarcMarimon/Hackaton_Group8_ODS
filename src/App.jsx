import UserProvider from './app/UserProvider';
import NavBar from './components/NavBar';
const App = () => {
  return (
    <UserProvider>
      <NavBar/>
    </UserProvider>
  )
}

export default App
