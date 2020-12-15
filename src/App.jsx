import React, { useEffect, useState } from 'react';

import { firebase } from './firebase';

import ListadoTareas from './components/ListadoTareas';
import Formulario from './components/Formulario';

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
				<div className="col-12">

					<h1 className="text-center">Crud React - Firestore </h1>

					<hr />
				</div>

				<div className="col-md-6 mb-5 mb-md-0">
					<Formulario setTareas={setTareas} />
				</div>

				<div className="col-md-6 mt-5 mt-md-0">
					<ListadoTareas
						setTareas={setTareas}
						tareas={tareas}
					/>
				</div>
			</div>
		</div>
	);
};

export default App;