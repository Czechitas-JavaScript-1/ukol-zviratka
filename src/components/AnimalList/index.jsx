import React, {useState, useEffect} from 'react';
import Animal from './../Animal';


const AnimalList = ({seznamZvirat, vyberZvire}) => {

  
  // const [animals, setAnimals] = useState([]);

  // useEffect(
  //     () => {
  //       fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
  //       .then( response => response.json())
  //       .then( data => {
  //         setAnimals(data.zvirata)
  //       })},
  //   []
  // );


  const [vybraneZvire, setVybraneZvire] = useState('');

  const zobrazDetailZvirete = (id) => {
    setVybraneZvire(id)
  };


  return (
    <>
      <div className="animal-list">
        <ul >
          {seznamZvirat.map(animal => 
              <Animal 
                key={animal.id}
                id={animal.id}
                name={animal.nazev}
                latinName={animal.nazevLatinsky}
                foto={animal.foto}
                {...seznamZvirat}
                vybraneZvire={vyberZvire}
                
                
              />
            )}
        </ul>
      </div>
    </>
  )
};

export default AnimalList;