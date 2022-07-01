import { useState } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {

  const [usuarios, setUsuarios] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />      

      <div className="mt-12 md:flex">
          <Formulario 
            usuarios = {usuarios}
            setUsuarios = {setUsuarios}
          /> 

          <ListadoClientes 
            usuarios = {usuarios}
          />  
      </div>  
            
    </div>
  )
}

export default App
