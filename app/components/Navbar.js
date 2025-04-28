import Link from "next/link";

export default function Navbar(){

    return(
        <header className="flex justify-between items-center p-6 bg-white shadow-md">
            <h1 className="text-2xl font-bold text-blue-800">Pokédex App</h1>
            <nav className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
                <Link href="/pokemon/page/1" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">All pokemons</Link>
                <Link href="/pokemon/dragon" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Dragon Pokemons</Link>
                <Link href="/pokemon/ghost" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Ghost Pokemons</Link>
            </nav>
        </header>
    )
}