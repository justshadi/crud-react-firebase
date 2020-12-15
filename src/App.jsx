import React, { useEffect, useState } from 'react';

import { firebase } from './firebase';

import ListadoTareas from './components/ListadoTareas';

function App() {

	const [tareas, setTareas] = useState([]);

	useEffect(() => {

		(async () => {

			try {

				const db = firebase.firestore();
				const data = await db.collection('tareas').get();
				const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));

				setTareas(arrayData);

			} catch (error) {

				console.error(error);

			}

		})();

	}, []);

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-6">
					<ListadoTareas tareas={tareas} />
				</div>

				<div className="col-md-6">
					Hacer Formulario
				</div>
			</div>
		</div>
	);
};

export default App;