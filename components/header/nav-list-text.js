import Link from "next/link";

function NavListText() {
  return (
    <ul className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-start">
      <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
        <Link href={"/headphones"}>HEADPHONES</Link>
      </li>
      <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
        <Link href={"/speakers"}>SPEAKERS</Link>
      </li>
      <li className="tracking-widest uppercase text-white font-bold text-sm hover:text-primary-index transition-colors duration-300">
        <Link href={"/earphones"}>EARPHONES</Link>
      </li>
    </ul>
  );
}

export default NavListText;
