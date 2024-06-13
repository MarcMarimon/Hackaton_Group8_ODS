
const NavBar = () => {
  return (
    <nav className="top-0 bg-[#017C9B] h-10 w-[100%] flex justify-between px-3 items-center">
        <h1 className="text-white font-semibold text-lg">EduLink</h1>
        <div>
            <button className="mr-3 text-white">Iniciar sesión</button>
            <button className="text-white">Registrarse</button>
        </div>
    </nav>
  )
}

export default NavBar