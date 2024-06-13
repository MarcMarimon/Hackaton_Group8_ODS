import { useEffect, useState } from "react";
import { obtenerCursos } from "../api/cursosApi.js";
import PopUp from "./PopUp.jsx";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [active, setAvtive] = useState(false);

  useEffect(() => {
    obtenerCursos().then((data) => {setCursos(data)});
  }, []);
  return (
    <>
      <h1 className="text-4xl mt-3 p-3 font-bold text-center">
        Todos los cursos
      </h1>
      <div className="flex gap-5 flex-wrap items-center justify-center text-center mt-10 w-[80%] m-auto">
        {cursos.map(curso => 
            <>
            <section key={curso.id} className="border w-[200px] h-[200px] p-5 shadow-lg hover:border-2 flex flex-col justify-between">
                <div>
                    <h3>{curso.titulo}</h3>
                    <p>{curso.descripcion}</p>
                    <p>{curso.profesor}</p>
                    <p>{curso.fecha}</p>
                </div>
                <div>
                    <button className="text-[#017C9B]" onClick={() => setAvtive(!active)}>Ver +</button>
                </div>
            </section>
            {active && <PopUp curso={curso}/>}
            </>
        )}
      </div>
    </>
  );
};

export default Cursos;
