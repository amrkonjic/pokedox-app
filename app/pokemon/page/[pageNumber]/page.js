import Link from "next/link";
export default async function PokemonPage({ params }) {
    const { pageNumber } = await params;
    const pageNum = parseInt(pageNumber, 10) || 1; // ako je krivi parametar
    const limit = 20;
    const offset = (pageNum - 1) * limit;
   
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
    const pokemons = data.results || [];
   
    return (
        <main className='p-4'>
            <h1 className='text-2xl mb-4'>Pokémon – Page {pageNum}</h1>
            <ul className='space-y-1'>
              {pokemons.map((pokemon, index) => {
                return (
                  <li key={index}>
                    <Link href={`/pokemon/${pokemon.name}`}>
                      {pokemon.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className='mt-4 flex gap-2'>
            {pageNum > 1 && (
              <Link
                href={`/pokemon/page/${pageNum - 1}`}
                className='px-2 py-1 bg-gray-300'
              >
                Previous
              </Link>
            )}
            <Link
              href={`/pokemon/page/${pageNum + 1}`}
              className='px-2 py-1 bg-gray-300'
            >
              Next
            </Link>
          </div>
        </main>
       );
  }