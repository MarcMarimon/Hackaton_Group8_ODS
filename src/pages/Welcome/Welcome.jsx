

const Welcome = () => {
  return (
    <div className="rounded-3xl border-2 border-white w-3/5 h-96 m-auto mt-40 flex flex-col justify-evenly">
        <h1 className="text-white text-center text-3xl">Welcome to ProfeApp!</h1>
        <div className="flex justify-center">
            <button className="rounded-3xl border-2 border-white text-white text-2xl p-2 mr-5 hover:bg-white hover:text-indigo-950">Sign up</button>
            <button className="rounded-3xl border-2 border-white text-white text-2xl p-2 ml-5 hover:bg-white hover:text-indigo-950">Sign in</button>
        </div>
    </div>
  )
}

export default Welcome