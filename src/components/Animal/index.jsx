import React from 'react';
import './style.css';

const Animal = ({id, name, latinName,foto, vybraneZvire}) => {
  return (
    <>
      <div className="animal" onClick={ () => { vybraneZvire(id)}}>
				<div className="animal__image">
					<img src={foto} alt="slon" />
				</div>
				<div className="animal__desc">
					<div className="animal__name">{name}</div>
					<div className="animal__latin">{latinName}</div>
				</div>
			</div>
    </>
  )
};

export default Animal;