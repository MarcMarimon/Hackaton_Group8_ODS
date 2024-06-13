/* eslint-disable react/prop-types */

const PopUp = ({curso}) => {
  return (
    <div className="border w-[800px] h-[600px] p-5 shadow-lg hover:border-2 flex flex-col justify-between">
      <h1>{curso.titulo}</h1>
      <p>{curso.descripcion}</p>
      <p>{curso.profesor}</p>
      <p>{curso.fecha}</p>
    </div>
  )
}

export default PopUp