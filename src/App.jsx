import { useState } from 'react'

// Importando los componentes
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {
  // función que se encarga de modificar el arreglo de usuarios
  const [usuarios, setUsuarios] = useState([]);
  
  return (
    <div className="container mx-auto mt-20">
      <Header />      
    
      <div className="mt-12 md:flex">
          <Formulario 
            usuarios = { usuarios }
            setUsuarios = { setUsuarios }
          /> 

          <ListadoClientes 
            usuarios = { usuarios }
          />  
      </div>  
            
    </div>
  )
}

export default App
