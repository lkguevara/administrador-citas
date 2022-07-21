const Usuario = ({usuario}) => {
  

  return (
    <div className= "mx-5 my-10 bg-white shadow-md px-5 py-5 rounded-xl">
    <p className= "font-bold mb-3 text-gray-700" >
      Nombre: {""}
        <span className= "font-normal" >{usuario.usuario}</span>
    </p>
    <p className= "font-bold mb-3 text-gray-700" >
      Email: {""}
        <span className= "font-normal" >{usuario.email}</span>
    </p>
    <p className= "font-bold mb-3 text-gray-700" >
      Fecha: {""}
        <span className= "font-normal" >{usuario.fecha}</span>
    </p>
    <p className= "font-bold mb-3 text-gray-700" >
      Observaciones: {""}
        <span className= "font-normal" >{usuario.observacion}</span>
    </p>

    <div className="flex justify-between mt-10">
      <button 
        type="button"
        className = "bg-cyan-800 py-2 px-8 mx-3 text-white font-bold rounded-lg hover:bg-cyan-700 cursor-pointer transition-all"
      >Editar</button>

      <button 
        type="button"
        className = "bg-cyan-800 py-2 px-8 mx-3 text-white font-bold rounded-lg hover:bg-cyan-700 cursor-pointer transition-all"
      >Eliminar</button>
    </div>
  </div>
  )

 
}

export default Usuario