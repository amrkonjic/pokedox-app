import NotFound from "@/app/not-found";

export default async function DragonPokemon() {

  const res = await fetch("https://pokeapi.co/api/v2/type/dragon/");
  if(!res.ok){
    return NotFound;
  }
  const data = await res.json();
  const dragonPokemons = data.pokemon || [];
  

  console.log(dragonPokemons);

    return (
      <div>
        <h1>List of Dragon Pokemons</h1>
        <ul>
          {dragonPokemons.map((dragon, index) => {
            return(
              <li key={index}>
                {dragon.pokemon.name}
              </li>
            )  
          })}
        </ul>
      </div>
    );
  }