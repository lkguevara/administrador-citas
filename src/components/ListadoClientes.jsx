import Usuario from "./Usuario"


const ListadoClientes = ({usuarios}) => {
  console.log(usuarios)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className= "font-black text-3xl text-center mt-10">
        Lista de clientes
      </h2>

      <p className= "text-xl mt-5 mb-10 text-center">
        Agendados
      </p>

    
      { usuarios.map ( (usuario) => (
          <Usuario 
            usuario = {usuario} 
          />
      ))}
        
        
      
      
      
     
      
     

 
      
    </div>
  )
}

export default ListadoClientes
