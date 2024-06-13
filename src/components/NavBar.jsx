

const NavBar = () => {
  return (
    <nav className="fixed top-0 bg-white h-8 w-[100%] flex justify-between px-3">
        <h1>Logo</h1>
        <div>
            <button className="mr-3">Sign up</button>
            <button>Sign In</button>
        </div>
    </nav>
  )
}

export default NavBar