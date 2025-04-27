import Link from "next/link";
export default async function PokemonPage({ params }) {
    const { pageNumber } = await params;
    const brStranice = parseInt(pageNumber, 10) || 1; // ako je krivi parametar
    const limit = 20;
    const offset = (brStranice - 1) * limit;
   
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await res.json();
   
    console.log(data);
   
    return (
        <main className='p-4'>
        <h1 className='text-2xl mb-4'>Pokémon – Stranica {brStranice}</h1>
        <ul className='space-y-1'>
        {data.results.map(p => (
        <li key={p.name}>{p.name}</li>
        ))}
        </ul>
        <div className='mt-4 flex gap-2'>
        {brStranice > 1 && (
          <Link
            href={`/pokemon/page/${brStranice - 1}`}
            className='px-2 py-1 bg-gray-300'
          >
            Prethodna
          </Link>
        )}
        <Link
          href={`/pokemon/page/${brStranice + 1}`}
          className='px-2 py-1 bg-gray-300'
        >
          Iduća
        </Link>
      </div>
        </main>
       )
       ;
  }