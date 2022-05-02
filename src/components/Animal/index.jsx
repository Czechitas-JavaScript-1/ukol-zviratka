import React from 'react';
import './style.css';

const Animal = ({name, latinName,foto}) => {
  return (
    <>
      <div className="animal" >
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