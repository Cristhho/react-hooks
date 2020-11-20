import React from 'react';

const CharacterItem = ({name, imageUrl}) => {
  return (
    <div className='item'>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
}

export default CharacterItem;
