import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoClientes from "./components/ListadoClientes"

function App() {

  return (
    <div className="container mx-auto mt-20">
      <Header />        
      <Formulario />        
      <ListadoClientes />        
    </div>
  )
}

export default App
