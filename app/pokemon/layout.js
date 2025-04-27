import Link from "next/link";
import BackButton from "../components/BackButton";
export default function PokemonLayout({ children }) {
    return (
      <div className='flex'>
        <aside className='w-60 bg-white shadow-lg p-4'>
            <h2 className='text-xl font-bold mb-4'>Pokémon Menu</h2>
            <nav className='space-y-2 mb-4'>
              <ul>
                <li>
                  <Link
                    href='/pokemon/dragon'
                    className='block text-gray-700 hover:text-blue-600'
                  >
                    Dragon Pokémoni
                  </Link>
                </li>
                <li>
                  <Link
                    href='/pokemon/ghost'
                    className='block text-gray-700 hover:text-blue-600'
                  >
                    Ghost Pokémoni
                  </Link>
                </li>
              </ul>
              <div className="mt-4">
                <BackButton />
              </div>
            </nav>
          </aside>
        <main className='flex-1 p-4'>{children}</main>
      </div>
    );
  }