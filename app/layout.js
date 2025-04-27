import "./globals.css";
import logo from "../public/juniorDev.png";
import Image from "next/image";

export const metadata = {
  title: "Next.js Pokédex",
  description: "Pokédex aplikacija u Next.js uz App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hr">
      <body>
        <header className="info">JuniorDev Next.js</header>
        <Image src={logo} alt={"JuniorDev"} placeholder="blur"/>
        {children}
      </body>
    </html>
  );
}
