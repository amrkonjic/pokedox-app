import "./globals.css";
import logo from "../public/juniorDev.png";
import Image from "next/image";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Next.js Pokédex",
  description: "Pokédex aplikacija u Next.js uz App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body className="min-h-screen bg-gradient-to-r from-cyan-200 to-blue-300">
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
