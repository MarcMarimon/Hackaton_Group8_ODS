import { Link } from "react-router-dom"


const Cursos = () => {
  return (
    <>
    <h1 className="text-4xl mt-3 p-3 font-bold text-center">Todos los cursos</h1>
<div className="flex gap-5 flex-wrap items-center justify-center text-center mt-10">
    <section className="border w-[200px] h-[300px] p-5 shadow-lg">
        <h3>Categoria</h3>
        <p>Titulo descripcion</p>
        <p>Profesor</p>
        <p>fecha</p>
        <Link to={{}} className="text-sky-400">Ver +</Link>
    </section>   <section className="border w-[200px] h-[300px] p-5 shadow-lg">
        <h3>Categoria</h3>
        <p>Titulo descripcion</p>
        <p>Profesor</p>
        <p>fecha</p>
        <Link to={{}} className="text-sky-400">Ver +</Link>
    </section>   <section className="border w-[200px] h-[300px] p-5 shadow-lg">
        <h3>Categoria</h3>
        <p>Titulo descripcion</p>
        <p>Profesor</p>
        <p>fecha</p>
        <Link to={{}} className="text-sky-400">Ver +</Link>
    </section>   <section className="border w-[200px] h-[300px] p-5 shadow-lg">
        <h3>Categoria</h3>
        <p>Titulo descripcion</p>
        <p>Profesor</p>
        <p>fecha</p>
        <Link to={{}} className="text-sky-400">Ver +</Link>
    </section>
</div>

    </>
  )
}

export default Cursos