import Usuario from "./Usuario"

const ListadoClientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className= "font-black text-3xl text-center mt-10">
        Lista de clientes
      </h2>

      <p className= "text-xl mt-5 mb-10 text-center">
        Agendados
      </p>

      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      <Usuario />
      
     

 
      
    </div>
  )
}

export default ListadoClientes
