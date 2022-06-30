import React from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">

      <h2 className= "font-black text-3xl text-center">
        Seguimiento citas
      </h2>

      <p className= "text-lg mt-5 text-center mb-10">
        Añadir usuario y {''}
        <span>administrarlo</span>
      </p>

      <form className="bg-white shadow-md rounded-md py-10 px-5">

        <div className="mb-5">
          <label htmlFor='usuario' className="block text-gray-700 font-bold">Nombre</label>
          <input 
            id="usuario"
            type="text"
            placeholder='Nombre usuario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor='email' className="block text-gray-700 font-bold">Email</label>
          <input 
            id="email"
            type="email"
            placeholder='Email usuario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor='number' className="block text-gray-700 font-bold">Fecha cita</label>
          <input 
            id="number"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label htmlFor='observ' className="block text-gray-700 font-bold">Observaciones</label>
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder='Describir la solicitud'
          />
        </div>

        <input 
          type="submit" 
          className = "bg-cyan-500 w-full p-3 text-white font-bold rounded-b hover:bg-cyan-700 cursor-pointer transition-all"
          value = "Agregar usuario"
        />
          
      </form>
    </div>
  )
}

export default Formulario

