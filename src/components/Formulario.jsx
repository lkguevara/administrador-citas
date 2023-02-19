import React, { useState, useEffect } from 'react'


const Formulario = ({ usuarios, setUsuarios, user, setUser }) => {

// useState a utilizar
  const [usuario, setUsuario] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [fecha, setFecha] = useState(''); 
  const [observacion, setObservacion] = useState('');
  const [error, setError] = useState(false);

// useEffect para detectar cambios en el usuario seleccionado
  useEffect(() => {
    // validar si el objeto está vacío o no 
    if (Object.keys(user).length > 0) {
      // si el objeto tiene algo, se llena el formulario con los datos del usuario
      setUsuario(user.usuario);
      setEmail(user.email);
      setFecha(user.fecha);
      setObservacion(user.observacion);
    }
  }, [user])
  

// Función para generar un ID aleatorio para cada usuario
  const generarId = () => {
    const randomId = Math.random().toString(36).substring(2);
    const fechaId = Date.now().toString(36);
    return randomId + fechaId;
  }

// Funcion para agregar un nuevo usuario
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    //5. validación de los campos
    if ( [ usuario, email, fecha, observacion ].includes('') ) {
      console.log('hay al menos un campo vacío')
      setError(true);
      return;
    }
    setError(false);
    
    // objeto de usuario
    const objetoUsuarios = {
      usuario, 
      email, 
      fecha, 
      observacion,
    }
    if (user.id) {
      //Editando el registro
     objetoUsuarios.id = user.id;
     const usuariosEditados = usuarios.map( usuario => usuario.id === user.id ? objetoUsuarios : usuario);
      setUsuarios(usuariosEditados);
      setUser({});

    }else{
      // agregando un nuevo registro incluyendo el id
      objetoUsuarios.id = generarId();
    // agregar el nuevo usuario al array, pero tomando una copia de lo que ya existe en el array
      setUsuarios ( [...usuarios, objetoUsuarios] )
      
    }
      
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
      
      {/* && => si erros es true se mostrará lo siguiente*/}
        {error && <p className= "text-red-600 text-center font-medium text-lg pb-4">Todos los campos son obligatorios</p>} 
        <div className="mb-5">
          <label htmlFor='usuario' className="block text-gray-700 font-bold">Nombre</label>
          <input 
            id="usuario"
            type="text"
            placeholder='Nombre usuario'
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

            //3. modificando el state mietras el usuario escribe
            value = {usuario} //valor inicial de estado
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
          value = {user.id ? 'Editar usuario' : 'Agregar usuario'} // si el usuario tiene un id, se mostrará editar usuario, sino, agregar usuario
        />
      </form>

    </div>
  )
}

export default Formulario

