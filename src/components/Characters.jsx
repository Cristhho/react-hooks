import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';

import CharacterItem from './CharacterItem';
import Search from './Search';

const initialState = {
  favorites: []
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_fAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const [search, setSearch] = useState('')
  const searchInput = useRef(null)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
  }, [])
  
  const handleFavorite = (fav) => {
    dispatch({
      type: 'ADD_TO_fAVORITE',
      payload: fav
    })
  }
  
  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value)
  }, [])
  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      return character.name.toLowerCase().includes(search.toLowerCase())
    })
  }, [characters, search])
  
  return (
    <>
      {favorites.favorites.map((fav) => (
        <li key={fav.id}>{fav.name}</li>
      ))}
      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />      
      <div className='Characters'>
        {filteredCharacters.map((character) => {
          return (
            <CharacterItem name={character.name} imageUrl={character.image} key={character.id} handleClick={() => handleFavorite(character)} />
          )
        })}
      </div>
    </>
  );
}

export default Characters;
