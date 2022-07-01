const Usuario = ({usuario}) => {
  console.log(usuario)
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
  </div>
  )
}

export default Usuario