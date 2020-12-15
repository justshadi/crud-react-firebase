import React from 'react';
import PropTypes from 'prop-types';

const Tarea = ({ tarea }) => {

    const { name, fecha } = tarea;

    return (
        <>
            {name}

            <button
                className="btn btn-outline-danger btn-sm float-right"
            >
                Eliminar
            </button>

            <button
                className="btn btn-outline-warning btn-sm float-right mr-1"
            >
                Editar
            </button>
        </>
    );
};

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired
};

export default Tarea;