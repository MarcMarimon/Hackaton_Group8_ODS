import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <nav className="top-0 bg-[#017C9B] h-10 w-[100%] flex justify-between px-3 items-center">
        <h1 className="text-white font-semibold text-lg">EduLink</h1>
        <ul>
            <li className="text-white inline"><Link to="/Login">Iniciar sesión</Link></li>
            {/* <li className="text-white inline"><Link to="/Register">Registrarse</Link></li> */}
        </ul>
    </nav>
  )
}

export default NavBar