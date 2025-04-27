import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const data = await res.json();
  const pokemoni = data.results || [];

  return (
    <main>
      <h1>Pokédex Aplikacija</h1>
      <ul>
        {pokemoni.map((pokemon, index) => {
          const ime = pokemon.name;
          return (
            <li key={index}>
              <Link href={`/pokemon/${ime}`}>{ime}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
