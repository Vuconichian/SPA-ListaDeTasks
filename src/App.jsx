import { useState } from 'react'
import { Formulario } from './components/Formulario'
import {  Header }  from './components/Header'
import { ListadoTareas } from './components/ListadoTareas'
import './App.css'




function App() {
  const [tareas, setTareas] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header /> 

      <div className='mt-12 flex'>
      <Formulario
      tareas={tareas}
      setTareas={setTareas}
        /> 
      <ListadoTareas
        tareas={tareas}
        setTareas={setTareas}
        />   
      </div> 
    </div>
  )
}

export default App
