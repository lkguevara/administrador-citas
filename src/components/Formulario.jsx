// 1. Imports
import React, { useState, useEffect } from 'react' //hooks
import { ToastContainer, toast } from 'react-toastify'; //modal
import 'react-toastify/dist/ReactToastify.css'; //estilos del modal

const Formulario = ({ usuarios, setUsuarios }) => {
// 2. useState
  const [usuario, setUsuario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [observacion, setObservacion] = useState('');

// 4.  funcion para agregar un nuevo usuario
  const handleSubmit = (e) => {
    //evita que se recargue la página
    e.preventDefault(); 
    
    // validación de los campos
    if ( [ usuario, email, fecha, observacion ].includes('') ) {
      toast.error('Todos los campos son obligatorios')
    }else{
      toast.info('Formulario enviado')
    }
    
    // objeto de usuario
    const objetoUsuarios = {
      usuario, 
      email, 
      fecha, 
      observacion 
    }

    // agregar el nuevo usuario al array, pero tomando una copia de lo que ya existe en el array
    setUsuarios ( [...usuarios, objetoUsuarios] )

    // limpiar los campos 
    setUsuario ("")
    setEmail ("")
    setFecha ("")
    setObservacion ("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className= "font-black text-3xl text-center">Agendamiento de citas</h2>
      <p className= "text-lg mt-5 text-center mb-10">
        Añadir usuario y {''}
        <span>administrarlo</span>
      </p>

      <form 
        onSubmit = { handleSubmit } 
        className= "bg-white shadow-md rounded-md py-10 px-5"
      >
        <div className="mb-5">
          <label htmlFor='usuario' className="block text-gray-700 font-bold">Nombre</label>
          <input 
            id="usuario"
            type="text"
            placeholder='Nombre usuario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            //3. modificando el state mietras el usuario escribe
            value = {usuario} //valor inicial
            onChange = { (e) => setUsuario (e.target.value) } //funcion que se ejecuta al cambiar el valor
          />
        </div>

        <div className="mb-5">
          <label htmlFor='email' className="block text-gray-700 font-bold">Email</label>
          <input 
            id="email"
            type="email"
            placeholder='Email usuario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = { email }
            onChange = { (e) => setEmail (e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor='number' className="block text-gray-700 font-bold">Fecha cita</label>
          <input 
            id="number"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value = {fecha}
            onChange = { (e) => setFecha (e.target.value) } 
          />
        </div>

        <div className="mb-5">
          <label htmlFor='observ' className="block text-gray-700 font-bold">Observaciones</label>
          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder='Describir la solicitud'
            value = {observacion}
            onChange = { (e) => setObservacion (e.target.value) } 
          />
        </div>

        <input 
          type="submit" 
          className = "bg-cyan-500 w-full p-3 text-white font-bold rounded-b hover:bg-cyan-700 cursor-pointer transition-all"
          value = "Agregar usuario"
        />
      </form>

      <ToastContainer theme="colored"/>
    </div>
  )
}

export default Formulario

