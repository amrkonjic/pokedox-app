"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function PokemonLista() {
 const [pokemons, setPokemons] = useState([]);
 const [offset, setOffset] = useState(0);
 const [pretraga, setPretraga] = useState("");
 const limit = 20;

 useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setPokemons(prev => [...prev, ...data.results]);
      });
    }, [offset]);
   
    const filterPokemoni = pokemons.filter((el) =>
      el.name.toLowerCase().includes(pretraga.toLowerCase())
    );

    function handleReset() {
        setPretraga("");
      }
      
    return (
      <main className='p-4'>
        <h1 className='text-2xl mb-4'>Pokémon List</h1>
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Traži Pokémona..."
            className="border border-b-gray-950 rounded p-2"
            value={pretraga}
            onChange={(e) => setPretraga(e.target.value)}
          />
          <button
            onClick={handleReset}
            className="bg-gray-200 border-b-gray-950 px-3 py-1 rounded"
          >
            Reset
          </button>
     </div>
     
     <ul className='space-y-1 mb-4'>
        {filterPokemoni.map((pokemon, index) => {
          return(
            <li key={pokemon.index} className="font-bold">
            <Link href={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </li>
          )
          
        })}
     </ul>

      <button
        onClick={() => setOffset(offset+ 20)}
        className="bg-blue-600 text-white px-3 py-1 rounded"
      >
        Load more...
      </button>
    </main>
      );
}
