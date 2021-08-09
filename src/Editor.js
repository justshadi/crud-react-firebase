import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './components/constanse';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';
import { useLocation } from 'react-router-dom';
import Data from './components/data'



const Editor = () =>   
{ const [error, setError] = useState(null);
  const [dat, setDat]=useState([])
    let location=useLocation()

    const onClick = async () =>{ (await instanceRef.current.save())
          console.log([])
    };
    
  // const [locc, setLoc ]=useState(location.pathname.substr(6))



  useEffect(() => {

		(async () => {

			try {

				docRef.get().then((doc) => {
          if (doc.exists) {
              setDat(doc.data());
              console.log(doc.data());
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch((error) => {
          console.log("Error getting document:", error);
      })

        

			} catch (error) {

				console.error(error);

			}

      const timer = setTimeout(() => {
        const chesk = false
      }, 5000);
    
		})();

	}, []);
   // const { id, name } = tarea;
   const instanceRef = React.useRef(null);

   const handleSave = async e => {
    
    

    console.log("savedData", );
    console.log("save", )

    
  
  
  const db = firebase.firestore();
             await db.collection('tareas').doc(location.state.id).update(
              await instanceRef.current.save()
            );

            

          }
          const db = firebase.firestore();
          var docRef = db.collection("tareas").doc(location.state.id);



          const block=dat;
   
    const showConsole =()=>{
        console.log(dat)
        
       
    }
   let datas=db.collection("tareas").doc(location.state.id)
   .onSnapshot((doc) => {
      //  console.log("Current data: ", doc.data());
   });
   var meetings = dat.blocks;

   for (var prop in meetings){
     console.log(prop)
   }

  return (
    <>
    
        <div>News {location.state.id}</div>
        <button onClick={handleSave}>Save!</button>
        <button onClick={onClick}>Console</button>
        
        
      <EditorJs  
      
      
      instanceRef={instance => (instanceRef.current = instance)}
      
     
      data={dat.blocks} 
      i18n={{
        messages: {}
      }}
      
      tools={EDITOR_JS_TOOLS}
      
        />;     
       
    </>
  );
}

export default Editor;