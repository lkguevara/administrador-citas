import Usuario from "./Usuario"

  
const ListadoClientes = ({usuarios}) => {
  // console.log(usuarios && usuarios.length); indica la cantidad de usuarios que hay en el array

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {usuarios && usuarios.length ? (
        <>
          <h2 className= "font-black text-3xl text-center mt-10 md:mt-0">
          Lista de clientes
          </h2>

          <p className= "text-xl mt-5 mb-10 text-center">
            Agendados
          </p>

        
          { usuarios.map ( (usuario) => (
              <Usuario 
                key = {usuario.id}
                usuario = {usuario} 
              />
          ))}
        </>
      )
      
       : 
       <>
        <h2 className= "font-black text-3xl text-center mt-10 md:mt-0">
          No hay usuarios
        </h2>
        <p className= "text-lg mt-5 text-center mb-10">
         agenda tus usuarios
        </p>
       </>
       
       }
      
       
    </div>
  )
}

export default ListadoClientes
