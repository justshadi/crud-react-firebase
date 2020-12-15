import React from 'react';
import PropTypes from 'prop-types';

import Tarea from './Tarea';

const ListadoTareas = ({ tareas }) => (
    <ul className="list-group">
        {
            tareas.map(tarea => (
                <li
                    className="list-group-item"
                    key={tarea.id}
                >
                    <Tarea tarea={tarea} />
                </li>
            ))
        }
    </ul>
);

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired
};

export default ListadoTareas;