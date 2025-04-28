import NotFound from "@/app/not-found";

export default async function GhostPokemon() {
    const res = await fetch("https://pokeapi.co/api/v2/type/ghost/")
    if(!res.ok){
      return NotFound;
    }

    const data = await res.json();
    const ghostPokemons = data.pokemon || [];

    return(
      <div>
         <h1>List of Ghost Pokemons</h1>
         <ul>
          {ghostPokemons.map((ghost, index) => {
            return(
              <li key={index}>
                {ghost.pokemon.name}
              </li>
            )
          })}
         </ul>
      </div>
    )

  }
  