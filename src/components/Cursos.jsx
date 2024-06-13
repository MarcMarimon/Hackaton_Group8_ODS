import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerCursos } from "../api/cursosApi.js";
import PopUp from "./PopUp.jsx";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [active, setAvtive] = useState(false);

  useEffect(() => {
    obtenerCursos().then((data) => setCursos(data));
  }, []);
  return (
    <>
      <h1 className="text-4xl mt-3 p-3 font-bold text-center">
        Todos los cursos
      </h1>
      <div className="flex gap-5 flex-wrap items-center justify-center text-center mt-10">
        {cursos.map(curso => 
            <section key={curso.id} className="border w-[200px] h-[300px] p-5 shadow-lg">
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <p>{curso.profesor}</p>
              <p>{curso.fecha}</p>
              <button className="text-sky-400" onClick={() => setAvtive(!active)}>Ver +</button>
              {active && <PopUp curso={curso}/>}
            </section>
        )}
      </div>
    </>
  );
};

export default Cursos;
