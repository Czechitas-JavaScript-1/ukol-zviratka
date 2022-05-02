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



  return (
    <>
      <div className="animal-list">
        <ul onClick={ () => { vyberZvire(seznamZvirat)}}>
          {seznamZvirat.map(animal => 
              <Animal 
                key={animal.id}
                name={animal.nazev}
                latinName={animal.nazevLatinsky}
                foto={animal.foto}
                
              />
            )}
        </ul>
      </div>
    </>
  )
};

export default AnimalList;