"use client"

import Link from "next/link";
import Image from "next/image";
import dragonImage from "@/public/dragon.webp"
import { useState, useEffect } from "react";

export default function DragonPokemon() {
   const [dragonPokemons, setDragonPokemons] = useState([]);
   const [offset, setOffset] = useState(0);
   const limit = 10;

   useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/type/dragon/?offset=${offset}&limit=${limit}`)
        .then(res => res.json())
        .then(data => {
          const slicedPokemons = data.pokemon.slice(offset, offset + limit);
          setDragonPokemons((prev) =>
            offset === 0 ? slicedPokemons : [...prev, ...slicedPokemons]
          );
        });
      }, [offset]);

    return (
      <>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl">List of Dragon Pokemons</h1>
          <div>
            {dragonPokemons.map((dragon, index) => {
              return(
                  <div key={index} className="bg-amber-100 p-4 m-4 text-center shadow-2xl">
                    <Link href={`/pokemon/${dragon.pokemon.name}`}>
                      {dragon.pokemon.name}
                    </Link>
                  </div>
              )  
             })}
            </div>
            <button
              onClick={() => setOffset(offset+ limit)}
              className="bg-blue-600 text-white px-3 py-1 rounded"
            >
              Load more...
            </button>
          </div>

        
      </div>
      <div className="min-h-screen m-20">
            <Image src={dragonImage} alt="dragon image" width={300} height={150}></Image>
      </div>

      </>
    );
  }