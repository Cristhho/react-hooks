import React from 'react';

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className='search'>
      <input type='text' value={search} onChange={handleSearch} placeholder='Buscar personaje' ref={searchInput} />
    </div>
  );
}

export default Search;
