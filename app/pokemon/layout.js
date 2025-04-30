import Link from "next/link";
import BackButton from "../components/BackButton";
export default function PokemonLayout({ children }) {
    return (
      <div className='flex justify-between min-h-screen'>
        <aside className='w-60 sticky top-0 h-full min-h-screen bg-blue-950 shadow-lg p-4'>
            <h2 className='text-xl text-gray-50 font-bold mb-4'>Pokémon Menu</h2>
            <nav className='space-y-10 mb-4'>
              <ul className="space-y-3 mt-8">
                <li>
                  <Link
                    href='/pokemon/dragon'
                    className='block text-gray-50 hover:text-gray-400'
                  >
                    Dragon Pokémons
                  </Link>
                </li>
                <li>
                  <Link
                    href='/pokemon/ghost'
                    className='block text-gray-50 hover:text-gray-400'
                  >
                    Ghost Pokémons
                  </Link>
                </li>
                <li>
                  <Link href="/pokemon" className="block text-gray-50 hover:text-gray-400">
                    Search
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <BackButton />
              </div>
            </nav>
          </aside>
        <main className='flex-1 flex justify-center'>{children}</main>
      </div>
    );
  }