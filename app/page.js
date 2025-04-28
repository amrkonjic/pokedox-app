import Image from "next/image";
import logo from "@/public/poke_logo.webp";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-center flex-grow p-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to the Pokédex Adventure!
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-12">
          Start your Pokédex journey! Ready to catch 'em all? 
          Explore a world of Pokémons, discover their secrets, and start building your dream team.
        </p>

        <Image src={logo} alt="pokemon logo" width={400} height={250}></Image>

        <section className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mt-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            About this App
          </h3>
          <p className="text-gray-600 text-base">
            This application allows users to explore a curated selection of Pokémon based on their types — specifically Ghost and Dragon.
            You can also browse the complete list of Pokémon, learn about their types and characteristics, and enjoy a simple and intuitive Pokédex experience.
          </p>
        </section>
      </main>
  );
}
