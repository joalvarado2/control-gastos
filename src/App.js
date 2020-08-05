import React, { useState, useEffect } from 'react';
import './App.css';
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import ControlPresupuesto from "./components/ControlPresupuesto"


function App() {

  //definiendo el state
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarpregunta, setMostrarPregunta] = useState(true)
  const [gastos, setGatos] = useState([])
  const [gasto, setGasto] = useState ({})
  const [crearGasto, setCrearGasto]= useState(false)


  //useEffect que actualiza el restante

  useEffect(() =>{

    // agrega el nuevo presupuesto
   if(crearGasto){
    setGatos([
      ...gastos,
      gasto
    ])
    // resta del presupuesto actual
    const presupuestoRestante = restante - gasto.quantly
    setRestante(presupuestoRestante)

    //resetear a false
    setCrearGasto(false)
   }
  },[gasto,crearGasto,gastos,restante])

  
  return (
    <div className="container">
      <header>
        <h1>Control De Gastos</h1>
        <div className="contenido-principal contenido">

          {mostrarpregunta
            ? (  <Pregunta
                   setPresupuesto={setPresupuesto}
                   setRestante={setRestante}
                  setMostrarPregunta={setMostrarPregunta}
                />
               )
            : (<div className="row">
                     <div className="one-half column">
                        <Formulario setGasto ={setGasto}
                          setCrearGasto={setCrearGasto}
                                   
                        />
                     </div>
                      <div className="one-half column">
                        <Listado 
                        gastos ={gastos}
                        />

                        <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                        />
                     </div>
              </div>
              )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
