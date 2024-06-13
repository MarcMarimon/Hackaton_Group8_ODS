import { Link } from "react-router-dom"
import { useUserContext } from "../app/UserProvider"
import { useEffect } from "react";

const NavBar = () => {

  const [user, setUser] = useUserContext();



  useEffect(() => {
    console.log('user')
    console.log(user)
  }, [user])

  return (
    <nav className="top-0 bg-[#017C9B] h-10 w-[100%] flex justify-between px-3 items-center">
      <h1 className="text-white font-semibold text-lg">EduLink</h1>
      <ul>
        <li className="text-white inline"><Link to="/Login">Iniciar sesión</Link></li>
        <li className="text-white inline"><Link to="/myCourses">Mis cursos</Link></li>
        {/* <li className="text-white inline"><Link to="/Register">Registrarse</Link></li> */}
      </ul>
    </nav>
  )
}

export default NavBar