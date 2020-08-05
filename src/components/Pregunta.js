import React, { Fragment, useState } from "react"
import Error from "./Error";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {

    // definiendo state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    // funcion que lee el presupuesto
    const definirPresupuesto = (event) => {
        setCantidad(parseInt(event.target.value))
    }

    //submit para definir presupuesto
    const agregarPresupuesto = (event) => {
        event.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true)
            return;
        }
        // si se pasa la validación
        setError(false);
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }

    return (
        <Fragment>
            <h2>coloca tu presupuesto</h2>
            {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />

            </form>
        </Fragment>
    );
}

export default Pregunta