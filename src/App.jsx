import { useState, useEffect } from 'react'

// Importando los componentes
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {
  const [usuarios, setUsuarios] = useState([]);// modificar el arreglo de usuarios
  const [user, setUser] = useState({});// estado para el usuario seleccionado

 /* // Aplicar localStorage
  useEffect(() => {
    const obtenerLS = () => {
      const usuariosLS = JSON.parse(localStorage.getItem("usuarios") ?? []); 
      setUsuarios(usuariosLS);
    }
    obtenerLS()
    
  }, []);// cuando se pasa un arreglo vacío, se ejecuta una sola vez

  // Sincroniza el state con lo que haya en usuarios
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios)); // convierte el arreglo de usuarios en un string
  }, [usuarios]); */


  // Función para eliminar un usuario
  const deleteUser = (id) => {
    const usuariosFiltrados = usuarios.filter( usuario => usuario.id !== id);
    setUsuarios(usuariosFiltrados);
  }
  
  
  return (
    <div className="container mx-auto mt-20">
      <Header />      
    
      <div className="mt-12 md:flex">
          <Formulario 
            usuarios = { usuarios }
            setUsuarios = { setUsuarios }
            user = { user }
            setUser = { setUser }
          /> 

          <ListadoClientes 
            usuarios = { usuarios }
            setUser = { setUser }
            deleteUser = { deleteUser }
          />  
      </div>  
            
    </div>
  )
}

export default App
