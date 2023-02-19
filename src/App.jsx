import { useState } from 'react'

// Importando los componentes
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {
  // función que se encarga de modificar el arreglo de usuarios
  const [usuarios, setUsuarios] = useState([]);
  // estado para el usuario seleccionado
  const [user, setUser] = useState({});

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
