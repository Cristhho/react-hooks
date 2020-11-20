import React from 'react';

const CharacterItem = ({name, imageUrl, handleClick}) => {
  return (
    <div className='item'>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <button type='button' onClick={handleClick}>Agregar favorito</button>
    </div>
  );
}

export default CharacterItem;
