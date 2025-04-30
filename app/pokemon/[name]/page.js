
import Image from "next/image";
import NotFound from "@/app/not-found";

export default async function PokemonDetalji({ params }) {
  const { name } = await params;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    return NotFound()
  }

  const data = await res.json();
  const spriteUrl = data.sprites.front_default;

  if (!spriteUrl) {
    return <p>Pokémon slika nije dostupna.</p>;
  }

  return (
    <main className="flex flex-col items-center mt-4 bg-white rounded-2xl shadow-2xl w-full max-w-md h-[550px]">
      
      <h1 className="text-4xl font-bold text-blue-900 capitalize mb-6">{data.name}</h1>
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={spriteUrl}
          alt={data.name}
          fill
          sizes="100vw" 
          style={{ objectFit: 'contain' }}
        />
      </div>
      <br />
      <div className="p-4 flex flex-col gap-3 bg-blue-100 rounded-2xl shadow-blue-900">
        <p>ID: {data.id}</p>
        <p>Weight: {data.weight}</p>
        <p>Height: {data.height}</p>
        
        <p>Types: {data.types.map(t => t.type.name).join(', ')}</p>
        <p>Abilities: {data.abilities.map(a => a.ability.name).join(', ')}</p>
        <p>Base XP: {data.base_experience}</p>
      </div>
      
      

    </main>
  );
}
