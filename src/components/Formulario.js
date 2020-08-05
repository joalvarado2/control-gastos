import React, { useState } from "react";
import Error from "./Error"
import shortid from "shortid"

const Formulario = ({ setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState("");
    const [quantly, setQuantly] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = (event) => {
        event.preventDefault()

        //validar
        if (quantly < 1 || isNaN(quantly) || nombre.trim() === "") {
            setError(true)
            return
        }
        setError(false)
        // construir gasto
        const gasto = {
            nombre,
            quantly,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)
      

        // resetear el form
        setNombre("")
        setQuantly(0)
        
    }

    return (
        <form
            onSubmit={agregarGasto} >

            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="Amobos campos son obligatorios o Presupuesto Incorrecto" /> : null}

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
                    value={quantly}
                    onChange={(event) => setQuantly(parseInt(event.target.value))}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>
    )
}

export default Formulario;