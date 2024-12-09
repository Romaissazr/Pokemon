import { useEffect, useState } from 'react';
import Pokemon from './Components/Pokemon';

function App() {
  const [pokemons, setPokemons] = useState([]); 

 useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20') 
      .then((response) => response.json())
      .then((data) => {
      
        const pokemonDetailsPromises = data.results.map((pokemon) =>
          fetch(pokemon.url).then((res) => res.json())
        );
        Promise.all(pokemonDetailsPromises)
          .then((pokemonsData) => {
            setPokemons(pokemonsData); 
          });
      });
  }, []);


  return (
    <div className="App flex justify-center items-center min-h-screen bg-purple-950  h-full">
      {pokemons.length > 0 ? (
        <div className="grid grid-cols-5 gap-6 py-10">
         
          {pokemons.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} /> 
          ))}
        </div>
      ) : (
        <p>Loading...</p> 
      )}
    </div>
  );
}
export default App;
