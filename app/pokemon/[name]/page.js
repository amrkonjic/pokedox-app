import styles from "./page.module.css";
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
    <main className="flex flex-col items-center mt-10 p-4 bg-lime-300">
      <h1 className={styles.title}>{data.name}</h1>
      <div style={{ position: 'relative', width: '100%', height: '300px' }}>
        <Image
          src={spriteUrl}
          alt={data.name}
          fill
          sizes="100vw" 
          style={{ objectFit: 'contain' }}
        />
      </div>
      <p className="plaviTekst">ID: {data.id}</p>
      <p>Težina: {data.weight}</p>
      <p>Visina: {data.height}</p>
    </main>
  );
}
