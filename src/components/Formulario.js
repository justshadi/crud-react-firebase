import React, { useState } from 'react';

import { firebase } from '../firebase';

const Formulario = ({ setTareas }) => {

    const [tarea, setTarea] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        // Validar
        if (!tarea.trim()) return setError('Escriba algo por favor...');
        setError(null);

        // Gerar nueva tarea
        const nuevaTarea = {
            name: tarea.trim(),
            fecha: Date.now()
        };

        // Agregar nueva tarea
        try {

            const db = firebase.firestore();
            const data = await db.collection('tareas').add(nuevaTarea);
            setTareas(tarea => [...tarea, { ...nuevaTarea, id: data.id }]);

        } catch (error) {

            console.error(error);

        };

        // Resetear
        setTarea('');
    };

    return (
        <>
            <h2>Formulario</h2>

            <hr />

            <form
                onSubmit={handleSubmit}
            >

                {error && <span className="text-danger">{error}</span>}

                <input
                    className="form-control mt-1 mb-2"
                    placeholder="Ingrese una tarea"
                    type="text"
                    value={tarea}
                    onChange={e => setTarea(e.target.value)}
                />

                <button
                    className="btn btn-dark btn-block"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
        </>
    );
};

export default Formulario;