import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';


const App = () => {

  const [animals, setAnimals] = useState([]);

  useEffect(
      () => {
        fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
        .then( response => response.json())
        .then( data => {
          setAnimals(data.zvirata)
        })},
    []
  );

  const [vybraneZvire, setVybraneZvire] = useState('');


  // const [selectedAnimalId, setSelectedAnimalId] = useState();

  const zobrazDetailZvirete = (id) => {
      setVybraneZvire(id)
    };



  // const zobrazDetail = (vybraneZvire) => {
  //   setSelectedAnimalId(vybraneZvire)
  // }


  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList seznamZvirat={animals}  vyberZvire={zobrazDetailZvirete} />
        <AnimalDetail selectedAnimal={vybraneZvire} />
        {/* zde budou jednotlivé komponenty */}
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
