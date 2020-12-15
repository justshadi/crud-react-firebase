import React from 'react';
import PropTypes from 'prop-types';

import { firebase } from '../firebase';

const Tarea = ({ tarea, tareas, setTareas }) => {

    const { id, name } = tarea;

    const eliminarTarea = async id => {
        try {

            const db = firebase.firestore();
            await db.collection('tareas').doc(id).delete();
            const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
            setTareas(nuevasTareas);

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <>
            <span>
                {name}
            </span>

            <button
                className="btn btn-outline-danger btn-sm float-right"
                onClick={() => eliminarTarea(id)}
            >
                Eliminar
            </button>

            <button
                className="btn btn-outline-warning btn-sm float-right mr-2"
            >
                Editar
            </button>
        </>
    );
};

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired,
    tareas: PropTypes.array.isRequired,
    setTareas: PropTypes.func.isRequired
};

export default Tarea;