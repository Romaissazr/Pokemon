import React from 'react';

function Pokemon({ pokemon }) {
  return (
    <div className="pokemon-card bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        className="mx-auto w-32 h-32"
      />
      <h2 className="mt-4 text-2xl font-bold">{pokemon.name}</h2>
      <p className="text-sm mt-2">Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
}

export default Pokemon;
