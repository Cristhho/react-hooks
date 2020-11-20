import React, { useState, useEffect } from 'react';
import CharacterItem from './CharacterItem';

const Characters = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }, [])
  return (
    <div className='Characters'>
      {characters.map((character) => {
        return (
          <CharacterItem name={character.name} imageUrl={character.image} key={character.id} />
        )
      })}
    </div>
  );
}

export default Characters;
