import React from 'react';
import PropTypes from 'prop-types';

import Tarea from './Tarea';

const ListadoTareas = ({ tareas, setTareas }) => (
    <>
        <h2>Listado de Tareas</h2>

        <hr />

        <ul className="list-group">


            {
                tareas.map(tarea => (
                    <li
                        className="list-group-item"
                        key={tarea.id}
                    >
                        <Tarea
                            tareas={tareas}
                            tarea={tarea}
                            setTareas={setTareas}
                        />
                    </li>
                ))
            }
        </ul>
    </>
);

ListadoTareas.propTypes = {
    tareas: PropTypes.array.isRequired,
    setTareas: PropTypes.func.isRequired
};

export default ListadoTareas;